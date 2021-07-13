import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamPart } from 'src/app/model/examPart';
import { ExamPartTaking } from 'src/app/model/examPartTaking';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { SluzbaExamsServiceService } from '../sluzba-exams/sluzba-exams-service.service';
import { SluzbaExamTakingsServiceService } from './sluzba-exam-takings-service.service';

@Component({
  selector: 'app-sluzba-exam-takings',
  templateUrl: './sluzba-exam-takings.component.html',
  styleUrls: ['./sluzba-exam-takings.component.css']
})
export class SluzbaExamTakingsComponent implements OnInit {

  examPart: ExamPart;
  takings: ExamPartTaking[];

  constructor(private examTakingsService: SluzbaExamTakingsServiceService, private examService: SluzbaExamsServiceService, private route: ActivatedRoute, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      this.examService.getExamPart(params['examPartId']).subscribe(res =>
        this.examPart = res.body
      ));

    if(this.isStudent()){
      this.route.queryParams.subscribe(params =>
        this.examTakingsService.getExamTakingsForStudent(params['examPartId'], params['enrollmentId']).subscribe(res =>
          this.takings = res.body
        ));
    }else{
      this.route.queryParams.subscribe(params =>
        this.examTakingsService.getExamTakings(params['examPartId']).subscribe(res =>
          this.takings = res.body
        ));
    }

  }

  gotoEdit(taking: ExamPartTaking): void {
    this.router.navigate(['/editTaking', taking.id]);
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
