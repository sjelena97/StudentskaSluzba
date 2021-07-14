import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { ExamPeriod } from 'src/app/model/examPeriod';
import { SluzbaExamPeriodsServiceService } from './sluzba-exam-periods-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

@Component({
  selector: 'app-sluzba-exam-periods',
  templateUrl: './sluzba-exam-periods.component.html',
  styleUrls: ['./sluzba-exam-periods.component.css']
})
export class SluzbaExamPeriodsComponent implements OnInit {

  periods: ExamPeriod[];

  subscription: Subscription;

  constructor(private periodService: SluzbaExamPeriodsServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = periodService.RegenerateData$.subscribe(() =>
      this.getPeriods()
    );
  }

  ngOnInit(): void {
    this.getPeriods();
  }

  getPeriods() {
    if(this.isAdmin()){
      this.periodService.getExamPeriods().subscribe(res =>
        this.periods = res.body);
    }else if(this.isStudent() || this.isTeacher()){
      this.periodService.getActiveExamPeriods().subscribe(res =>
        this.periods = res.body);
    }
   
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

  isAdmin():boolean{
    return this.authService.isAdmin();
  }

  isTeacher(): boolean {
    return this.authService.isTeacher();
  }

  isStudent(): boolean {
    return this.authService.isStudent();
  }

  gotoAdd(): void {
    this.router.navigate(['/addExamPeriod']);
  }

  gotoEdit(period: ExamPeriod): void {
    this.router.navigate(['/editExamPeriod', period.id]);
  }

  deletePeriod(periodId: number, periodName: string): void {
    if(confirm("Are you sure to delete exam period: " + periodName + "?")){
    this.periodService.deletePeriod(periodId).subscribe(
      () => this.getPeriods()
    );
    }
  }

}
