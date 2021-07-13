import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';

import { ExamPartTaking } from 'src/app/model/examPartTaking';
import { ExamStatus } from 'src/app/model/examStatus';
import { SluzbaExamTakingsServiceService } from '../sluzba-exam-takings/sluzba-exam-takings-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

@Component({
  selector: 'app-sluzba-exam-taking-details',
  templateUrl: './sluzba-exam-taking-details.component.html',
  styleUrls: ['./sluzba-exam-taking-details.component.css']
})
export class SluzbaExamTakingDetailsComponent implements OnInit {

  statuses: ExamStatus[];
  examTaking: ExamPartTaking;

  constructor(private examTakingService: SluzbaExamTakingsServiceService, 
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    this.examTakingService.getExamStatuses().subscribe(res =>
      this.statuses = res.body);

    if (this.route.snapshot.params['id']) {
      // fetch exam taking if we edit the existing exam taking
      this.route.params.pipe(switchMap((params: Params) =>
        this.examTakingService.getExamTaking(+params['id'])))
        .subscribe(res => {
          this.examTaking = res.body;
        });
    }
  }

  save(): void {
    this.edit();
  }

  private edit(): void {
    this.examTakingService.updateExamTaking(this.examTaking)
      .subscribe(examTaking => {
        this.examTakingService.announceChange();
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

}
