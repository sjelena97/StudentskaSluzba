import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaCoursesServiceService } from './sluzba-courses-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

interface Course {
  id?: number;
  name: string;
  espb: number;
}


@Component({
  selector: 'app-sluzba-courses',
  templateUrl: './sluzba-courses.component.html',
  styleUrls: ['./sluzba-courses.component.css']
})
export class SluzbaCoursesComponent implements OnInit {

  courses: Course[];

  subscription: Subscription;

  constructor(private courseService: SluzbaCoursesServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = courseService.RegenerateData$.subscribe(() =>
      this.getCourses()
    );
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses().subscribe(res =>
      this.courses = res.body);
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  isAdmin():boolean{
    return this.authService.isAdmin();
  }

  gotoAdd(): void {
    this.router.navigate(['/addCourse']);
  }

  gotoEdit(course: Course): void {
    this.router.navigate(['/editCourse', course.id]);
  }

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe(
      () => this.getCourses()
    );
  }
}
