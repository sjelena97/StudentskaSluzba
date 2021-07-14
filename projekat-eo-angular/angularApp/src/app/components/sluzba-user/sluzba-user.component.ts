import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap } from 'rxjs/operators';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { User } from 'src/app/model/user';
import { SluzbaUserServiceService } from './sluzba-user-service.service';

@Component({
  selector: 'app-sluzba-user',
  templateUrl: './sluzba-user.component.html',
  styleUrls: ['./sluzba-user.component.css']
})
export class SluzbaUserComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  user: User = new User({ // create an empty user
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder, private userService: SluzbaUserServiceService, private location: Location, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // convenience getter for easy access to form fields
  get u() { return this.userForm.controls; }

  save(): void {
    this.add();
  }

  private add(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.user.firstName = this.userForm.get('firstName').value;
    this.user.lastName = this.userForm.get('lastName').value;
    this.user.username = this.userForm.get('username').value;
    this.user.email = this.userForm.get('email').value;

    this.userService.addUser(this.user)
      .subscribe(res => {
        this.userService.announceChange();
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
