import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';

import { Enrollment } from 'src/app/model/enrollment';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { SluzbaEnrollmentsServiceService } from '../sluzba-enrollments/sluzba-enrollments-service.service';
import { SluzbaExamTakingsServiceService } from '../sluzba-exam-takings/sluzba-exam-takings-service.service';

@Component({
  selector: 'app-sluzba-grade-details',
  templateUrl: './sluzba-grade-details.component.html',
  styleUrls: ['./sluzba-grade-details.component.css']
})
export class SluzbaGradeDetailsComponent implements OnInit {

  points: number;
  enrollment: Enrollment;

  constructor(private enrollmentService: SluzbaEnrollmentsServiceService, private examTakingsService: SluzbaExamTakingsServiceService, 
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {

    if (this.route.snapshot.params['id']) {
      // fetch exam taking if we edit the existing exam taking
      this.route.params.pipe(switchMap((params: Params) =>
      this.enrollmentService.getEnrollment(+params['id'])))
        .subscribe(res => {
          this.enrollment = res.body;
          this.getPointsByEnrollment();
        });
    }
  }

  getPointsByEnrollment() {
    this.examTakingsService.getPointsByEnrollment(this.enrollment.id).subscribe(res =>
      this.points = res.body);
  }

  save(): void {
    this.edit();
  }

  private edit(): void {
    this.enrollmentService.updateGrade(this.enrollment.id, this.enrollment.grade)
      .subscribe(res => {
        this.enrollmentService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
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
}
