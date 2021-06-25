import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/model/user';
import { SluzbaProfileServiceService } from './sluzba-profile-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { Account } from 'src/app/model/account';
import { SluzbaAccountServiceService } from '../sluzba-account/sluzba-account-service.service';

interface Student {
  id?: number;
  cardName: String;
  account: Account;
}

@Component({
  selector: 'app-sluzba-profile',
  templateUrl: './sluzba-profile.component.html',
  styleUrls: ['./sluzba-profile.component.css']
})
export class SluzbaProfileComponent implements OnInit {

  userForm: FormGroup;
  studentForm: FormGroup;
  passwordForm: FormGroup;
  submitted = false;

  user: User = new User({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  student: Student;
  available: 0 | number;

  subscription: Subscription;
  public showPassword: boolean;
  public showPassword2: boolean;


  constructor(private formBuilder: FormBuilder, private profileService: SluzbaProfileServiceService, private authenticationService: AuthenticationServiceService, private accountService: SluzbaAccountServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = profileService.RegenerateData$.subscribe(() =>
      this.getUser()
    );
  }

  isShowDiv = false;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  ngOnInit(): void {
    this.getUser();
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
      
    });
    this.studentForm = this.formBuilder.group({
      cardName: ['', Validators.required],
      bankAccount: ['', Validators.required],
      model: ['', Validators.required],
      personalCallToNumber: ['', Validators.required]
    });
    this.passwordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('newPassword', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get u() { return this.userForm.controls; }
  get s() { return this.studentForm.controls; }
  get p() { return this.passwordForm.controls; }

  getUser() {
    this.profileService.getUser().subscribe(res => {
      this.user = res.body;
      this.userForm.get('firstName').setValue(this.user.firstName);
      this.userForm.get('lastName').setValue(this.user.lastName);
      this.userForm.get('username').setValue(this.user.username);
      this.userForm.get('email').setValue(this.user.email);
    });
    if (this.authService.isStudent()) {
      this.getStudent();
    }
  }

  getStudent() {
    this.profileService.getStudent().
      subscribe(res => {
        this.student = res.body;
        this.studentForm.get('cardName').setValue(this.student.cardName);
        this.studentForm.get('bankAccount').setValue(this.student.account.bankAccount);
        this.studentForm.get('model').setValue(this.student.account.model);
        this.studentForm.get('personalCallToNumber').setValue(this.student.account.personalCallToNumber);
        this.getAvailableFunds();
      });

  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }


  private getAvailableFunds(): void {
    this.accountService.getAvailableFunds(this.student.account.id).subscribe(res => {
      this.available = res.body;
    });
  }

  save(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.user.firstName =  this.userForm.get('firstName').value;
    this.user.lastName =  this.userForm.get('lastName').value;
    this.user.username =  this.userForm.get('username').value;
    this.user.email =  this.userForm.get('email').value;

    this.profileService.editUser(this.user)
      .subscribe(user => {
        this.profileService.announceChange();
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      });
  }

  updatePassword(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.passwordForm.invalid) {
      return;
    }

    console.log("new: " + this.passwordForm.get('newPassword').value);
    this.profileService.updatePassword(this.user.id, this.passwordForm.get('newPassword').value)
      .subscribe(user => {
        this.profileService.announceChange();
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      });

  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


  isStudent(): boolean {
    return this.authService.isStudent();
  }


  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
