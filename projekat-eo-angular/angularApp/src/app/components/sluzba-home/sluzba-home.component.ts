import { Component, OnInit } from '@angular/core';
import { ExamPart } from 'src/app/model/examPart';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { SluzbaExamsServiceService } from '../sluzba-exams/sluzba-exams-service.service';

@Component({
  selector: 'app-sluzba-home',
  templateUrl: './sluzba-home.component.html',
  styleUrls: ['./sluzba-home.component.css']
})
export class SluzbaHomeComponent implements OnInit {

  examParts: ExamPart[];

  constructor(private examPartsService: SluzbaExamsServiceService, private authService: AuthenticationServiceService) {
  }

  ngOnInit(): void {
    this.examPartsService.getComingExamPartsForUser().subscribe(res =>
      this.examParts = res.body);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
