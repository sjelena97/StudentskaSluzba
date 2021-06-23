import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  user: User = new User({
    username: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  student: Student;
  available: 0 | number;

  subscription: Subscription;

  constructor(private profileService: SluzbaProfileServiceService, private authenticationService:AuthenticationServiceService, private accountService: SluzbaAccountServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = profileService.RegenerateData$.subscribe(() =>
      this.getUser()
    );
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.profileService.getUser().subscribe(res =>
      this.user = res.body);
    if (this.authService.isStudent()) {
      this.getStudent();
    }
  }

  getStudent() {
    this.profileService.getStudent().
      subscribe(res => {
        this.student = res.body;
        this.getAvailableFunds();
      });

  }

  private getAvailableFunds(): void {
    this.accountService.getAvailableFunds(this.student.account.id).subscribe(res =>
      this.available = res.body);
  }

  save(): void {
    this.profileService.editUser(this.user)
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
