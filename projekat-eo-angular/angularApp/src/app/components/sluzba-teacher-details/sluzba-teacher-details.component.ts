import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap } from 'rxjs/operators';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { Teacher } from 'src/app/model/teacher';
import { User } from 'src/app/model/user';
import { Teaching } from 'src/app/model/teaching';
import { SluzbaProfileServiceService } from '../sluzba-profile/sluzba-profile-service.service';
import { SluzbaTeachersServiceService } from '../sluzba-teachers/sluzba-teachers-service.service';

@Component({
  selector: 'app-sluzba-teacher-details',
  templateUrl: './sluzba-teacher-details.component.html',
  styleUrls: ['./sluzba-teacher-details.component.css']
})
export class SluzbaTeacherDetailsComponent implements OnInit {

  userForm: FormGroup;
  passwordForm: FormGroup;
  submitted = false;

  teacher: Teacher = new Teacher({ // if we add a new teacher, create an empty teacher
    user: new User({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  });

  teachings: Teaching[];

  public showPassword: boolean;
  public showPassword2: boolean;

  mode: string = 'ADD';

  constructor(private formBuilder: FormBuilder, private profileService: SluzbaProfileServiceService, private teacherService: SluzbaTeachersServiceService, 
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  isShowDiv = false;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.passwordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('newPassword', 'confirmNewPassword')
    });

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      // fetch student if we edit the existing student
      this.route.params.pipe(switchMap((params: Params) =>
        this.teacherService.getTeacher(+params['id'])))
        .subscribe(res => {
          this.teacher = res.body;
          this.userForm.get('firstName').setValue(this.teacher.user.firstName);
          this.userForm.get('lastName').setValue(this.teacher.user.lastName);
          this.userForm.get('username').setValue(this.teacher.user.username);
          this.userForm.get('email').setValue(this.teacher.user.email);
          this.getTeachings();
        });
    }
  }

  // convenience getter for easy access to form fields
  get u() { return this.userForm.controls; }
  get p() { return this.passwordForm.controls; }

  private getTeachings(): void {
    this.teacherService.getTeacherTeachings(this.teacher.id).subscribe(res =>
      this.teachings = res.body);
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

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.teacher.user.firstName = this.userForm.get('firstName').value;
    this.teacher.user.lastName = this.userForm.get('lastName').value;
    this.teacher.user.username = this.userForm.get('username').value;
    this.teacher.user.email = this.userForm.get('email').value;

    this.teacherService.addTeacher(this.teacher)
      .subscribe(res => {
        this.teacherService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.teacher.user.firstName = this.userForm.get('firstName').value;
    this.teacher.user.lastName = this.userForm.get('lastName').value;
    this.teacher.user.username = this.userForm.get('username').value;
    this.teacher.user.email = this.userForm.get('email').value;

    this.teacherService.editTeacher(this.teacher)
      .subscribe(teacher => {
        this.teacherService.announceChange();
        this.goBack();
      });
  }

  updatePassword(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.passwordForm.invalid) {
      return;
    }

    console.log("new: " + this.passwordForm.get('newPassword').value);
    this.profileService.updatePassword(this.teacher.user.id, this.passwordForm.get('newPassword').value)
      .subscribe(teacher => {
        this.profileService.announceChange();
        this.goBack();
      });

  }

  goBack(): void {
    this.location.back();
  }


  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
