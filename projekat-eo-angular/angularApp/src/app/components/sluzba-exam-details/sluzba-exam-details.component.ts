import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';

import { Course } from 'src/app/model/course';
import { ExamPart } from 'src/app/model/examPart';
import { ExamPartType } from 'src/app/model/examPartType';
import { ExamPeriod } from 'src/app/model/examPeriod';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { SluzbaCoursesServiceService } from '../sluzba-courses/sluzba-courses-service.service';
import { SluzbaExamPeriodsServiceService } from '../sluzba-exam-periods/sluzba-exam-periods-service.service';
import { SluzbaExamsServiceService } from '../sluzba-exams/sluzba-exams-service.service';

@Component({
  selector: 'app-sluzba-exam-details',
  templateUrl: './sluzba-exam-details.component.html',
  styleUrls: ['./sluzba-exam-details.component.css']
})
export class SluzbaExamDetailsComponent implements OnInit {

  examPart: ExamPart = new ExamPart({ // if we add a new exam, create an empty exam
    period: new ExamPeriod({
      startDate: null,
      endDate: null,
      name: '',
      active:true
    }),
    type: new ExamPartType({
      name: '',
      code: ''
    }),
    date: null,
    location: '',
    points: 0,
    active: true,
    course: new Course({
      name: '',
      espb: 0,
      code: '',
      active: true
    }),
  });

  types: ExamPartType[];
  periods: ExamPeriod[];
  courses: Course[];

  mode: string = 'ADD';

  constructor(private courseService: SluzbaCoursesServiceService, private examService: SluzbaExamsServiceService, private examPeriodService: SluzbaExamPeriodsServiceService,
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    this.examService.getExamPartTypes().subscribe(res =>
      this.types = res.body);
    
    this.courseService.getCourses().subscribe(res =>
      this.courses = res.body);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      this.examPeriodService.getExamPeriods().subscribe(res =>
        this.periods = res.body);
      // fetch exam part if we edit the existing exam part
      this.route.params.pipe(switchMap((params: Params) =>
        this.examService.getExamPart(+params['id'])))
        .subscribe(res => {
          this.examPart = res.body;
        });
    }else{
      this.examPeriodService.getActiveExamPeriods().subscribe(res =>
        this.periods = res.body);
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.examService.addExamPart(this.examPart)
      .subscribe(res => {
        this.examService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.examService.editExamPart(this.examPart)
      .subscribe(examPart => {
        this.examService.announceChange();
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
