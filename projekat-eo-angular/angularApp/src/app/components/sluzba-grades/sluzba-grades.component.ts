import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/model/enrollment';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { SluzbaEnrollmentsServiceService } from '../sluzba-enrollments/sluzba-enrollments-service.service';

@Component({
  selector: 'app-sluzba-grades',
  templateUrl: './sluzba-grades.component.html',
  styleUrls: ['./sluzba-grades.component.css']
})
export class SluzbaGradesComponent implements OnInit {

  enrollments: Enrollment[];

  constructor(private enrollmentService: SluzbaEnrollmentsServiceService, private authService: AuthenticationServiceService) {
  }

  ngOnInit(): void {
    this.enrollmentService.getPassedEnrollments().subscribe(res =>
      this.enrollments = res.body);
  }

  isStudent(): boolean {
    return this.authService.isStudent();
  }


}
