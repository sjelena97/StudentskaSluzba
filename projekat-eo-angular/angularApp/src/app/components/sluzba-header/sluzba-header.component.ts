import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaHeaderServiceService } from './sluzba-header-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

interface User {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-sluzba-header',
  templateUrl: './sluzba-header.component.html',
  styleUrls: ['./sluzba-header.component.css']
})
export class SluzbaHeaderComponent implements OnInit {

  user: User;

  subscription: Subscription;

  constructor(private headerService: SluzbaHeaderServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = headerService.RegenerateData$.subscribe(() =>
      this.getUser()
    );
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.headerService.getUser().subscribe(res =>
      this.user = res.body);
  }


  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  isStudent():boolean{
    return this.authService.isStudent();
  }

}
