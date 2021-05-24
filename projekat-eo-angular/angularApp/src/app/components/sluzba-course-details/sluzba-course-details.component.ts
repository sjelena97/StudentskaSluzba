import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {switchMap} from 'rxjs/operators';
import { SluzbaCoursesServiceService } from '../sluzba-courses/sluzba-courses-service.service';
import { Course } from 'src/app/model/course';
import { Enrollment } from 'src/app/model/enrollment';
import { SluzbaEnrollmentsServiceService } from '../sluzba-enrollments/sluzba-enrollments-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

@Component({
  selector: 'app-sluzba-course-details',
  templateUrl: './sluzba-course-details.component.html',
  styleUrls: ['./sluzba-course-details.component.css']
})
export class SluzbaCourseDetailsComponent implements OnInit {

  course: Course = new Course({ // if we add a new course, create an empty course
    name: '',
    code: '',
    espb: 0,
    active: true
  });

  enrollments: Enrollment[];

  mode: string = 'ADD';

  constructor(private courseService: SluzbaCoursesServiceService, private enrollmentService: SluzbaEnrollmentsServiceService,
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
    enrollmentService.RegenerateData$.subscribe(() =>
      this.getEnrollments()
    );
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      // fetch course if we edit the existing course
      this.route.params.pipe(switchMap((params: Params) =>
          this.courseService.getCourse(+params['id'])))
        .subscribe(res => {
          this.course = res.body;
          this.getEnrollments();
        });
    }
  }

  private getEnrollments(): void {
    this.courseService.getCourseEnrollments(this.course.id).subscribe(res =>
      this.enrollments = res.body);
  }


  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.courseService.addCourse(this.course)
      .subscribe(res => {
        this.courseService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.courseService.editCourse(this.course)
      .subscribe(course => {
        this.courseService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

  
  isAdmin():boolean{
    return this.authService.isAdmin();
  }

  gotoAddEnrollment(): void {
    this.router.navigate(['/addEnrollment'], { queryParams: { courseId: this.course.id } });
  }

  deleteEnrollment(enrollmentId: number): void {
    this.enrollmentService.deleteEnrollment(enrollmentId).subscribe(
      () => this.getEnrollments()
    );
  }

}
