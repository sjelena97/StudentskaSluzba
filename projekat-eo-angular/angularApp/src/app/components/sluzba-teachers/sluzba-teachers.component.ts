import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaTeachersServiceService } from './sluzba-teachers-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { User } from 'src/app/model/user';

interface Teacher {
  id?: number;
  user: User;
}

@Component({
  selector: 'app-sluzba-teachers',
  templateUrl: './sluzba-teachers.component.html',
  styleUrls: ['./sluzba-teachers.component.css']
})
export class SluzbaTeachersComponent implements OnInit {

  teachers: Teacher[];

  subscription: Subscription;

  constructor(private teacherService: SluzbaTeachersServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = teacherService.RegenerateData$.subscribe(() =>
      this.getTeachers()
    );
  }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers() {
    this.teacherService.getTeachers().subscribe(res =>
      this.teachers = res.body);
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  isAdmin():boolean{
    return this.authService.isAdmin();
  }


}
