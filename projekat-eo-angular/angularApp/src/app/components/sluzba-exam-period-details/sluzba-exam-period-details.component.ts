import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';
import { ExamPeriod } from 'src/app/model/examPeriod';
import { SluzbaExamPeriodsServiceService } from '../sluzba-exam-periods/sluzba-exam-periods-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

@Component({
  selector: 'app-sluzba-exam-period-details',
  templateUrl: './sluzba-exam-period-details.component.html',
  styleUrls: ['./sluzba-exam-period-details.component.css']
})
export class SluzbaExamPeriodDetailsComponent implements OnInit {

  period: ExamPeriod = new ExamPeriod({ // if we add a new period, create an empty period
      startDate: null,
      endDate: null,
      name: '',
      active:true
  });

  mode: string = 'ADD';

  constructor(private examPeriodService: SluzbaExamPeriodsServiceService,
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      // fetch exam part if we edit the existing exam part
      this.route.params.pipe(switchMap((params: Params) =>
        this.examPeriodService.getExamPeriod(+params['id'])))
        .subscribe(res => {
          this.period = res.body;
        });
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.examPeriodService.addExamPeriod(this.period)
      .subscribe(res => {
        this.examPeriodService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.examPeriodService.editExamPeriod(this.period)
      .subscribe(examPeriod => {
        this.examPeriodService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
