import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaProfileServiceService } from './sluzba-profile-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

interface User {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
}

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

  user: User;
  student: Student;

  subscription: Subscription;

  constructor(private profileService: SluzbaProfileServiceService, private router: Router, private authService: AuthenticationServiceService) {
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
      if(this.authService.isStudent()){
        this.getStudent();
      }
  }

  getStudent(){
    this.profileService.getStudent().
            subscribe(res =>
            this.student = res.body);
  }


  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  isStudent():boolean{
    return this.authService.isStudent();
  }

}
