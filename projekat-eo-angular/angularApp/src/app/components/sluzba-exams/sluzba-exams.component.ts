import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { SluzbaExamsServiceService } from './sluzba-exams-service.service';
import { SluzbaCoursesServiceService } from '../sluzba-courses/sluzba-courses-service.service';
import { Teaching } from 'src/app/model/teaching';
import { Course } from 'src/app/model/course';
import { Enrollment } from 'src/app/model/enrollment';
import { SluzbaEnrollmentsServiceService } from '../sluzba-enrollments/sluzba-enrollments-service.service';
import { SluzbaTeachingsServiceService } from '../sluzba-teachings/sluzba-teachings-service.service';
import { ExamPart } from 'src/app/model/examPart';

@Component({
  selector: 'app-sluzba-exams',
  templateUrl: './sluzba-exams.component.html',
  styleUrls: ['./sluzba-exams.component.css']
})
export class SluzbaExamsComponent implements OnInit {

  courses: Course[];
  teachings: Teaching[];
  enrollments: Enrollment[];
  selectedCourse: Course;
  selectedEnrollment: Enrollment;
  selectedTeaching: Teaching;

  examParts: ExamPart[];

  constructor(private examPartsService: SluzbaExamsServiceService, private courseService: SluzbaCoursesServiceService, private enrollmentService: SluzbaEnrollmentsServiceService, private teachingService: SluzbaTeachingsServiceService, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit(): void {
    if (this.isAdmin()) {
      this.courseService.getCourses().subscribe(res =>
        this.courses = res.body);
    } else if (this.isTeacher()) {
      this.teachingService.getTeachings().subscribe(res =>
        this.teachings = res.body);
    } else if (this.isStudent()) {
      this.enrollmentService.getEnrollments().subscribe(res =>
        this.enrollments = res.body);
    }

  }

  onChange(newValue) {
    console.log(newValue);
    if (this.isAdmin()) {
      this.selectedCourse = newValue;
      this.examPartsService.getExamPartsForCourse(this.selectedCourse.id).subscribe(res =>
        this.examParts = res.body);
    } else if (this.isStudent()) {
      this.selectedEnrollment = newValue;
      this.examPartsService.getExamPartsForEnrollment(this.selectedEnrollment.id).subscribe(res =>
        this.examParts = res.body);
    } else if (this.isTeacher()) {
      this.selectedTeaching = newValue;
      this.examPartsService.getExamPartsForTeaching(this.selectedTeaching.id).subscribe(res =>
        this.examParts = res.body);
    }
  }

  gotoAdd(): void {
    this.router.navigate(['/addExamPart']);
  }

  gotoEdit(examPart: ExamPart): void {
    this.router.navigate(['/editExamPart', examPart.id]);
  }

  gotoTakings(examPart: ExamPart): void {
    if(this.isStudent()){
      this.router.navigate(['/takings'], { queryParams: { examPartId: examPart.id, enrollmentId: this.selectedEnrollment.id } });
    }else{
      this.router.navigate(['/takings'], { queryParams: { examPartId: examPart.id } });
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isTeacher(): boolean {
    return this.authService.isTeacher();
  }

  isStudent(): boolean {
    return this.authService.isStudent();
  }
}
