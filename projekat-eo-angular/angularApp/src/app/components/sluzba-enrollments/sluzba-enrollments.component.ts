import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Enrollment } from 'src/app/model/enrollment';
import { Student } from 'src/app/model/student';

import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Account } from 'src/app/model/account';
import { User } from 'src/app/model/user';
import { SluzbaStudentsServiceService } from '../sluzba-students/sluzba-students-service.service';
import { SluzbaCoursesServiceService } from '../sluzba-courses/sluzba-courses-service.service';
import { SluzbaEnrollmentsServiceService } from './sluzba-enrollments-service.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-sluzba-enrollments',
  templateUrl: './sluzba-enrollments.component.html',
  styleUrls: ['./sluzba-enrollments.component.css']
})
export class SluzbaEnrollmentsComponent implements OnInit {

  enrollment: Enrollment;
  students: Student[];

  constructor(private route: ActivatedRoute, private courseService: SluzbaCoursesServiceService,
    private studentService: SluzbaStudentsServiceService, private enrollmentService: SluzbaEnrollmentsServiceService,
    private location: Location) {
    this.enrollment = new Enrollment({
      startDate: null,
      endDate: null,
      student: new Student({
        cardName: '',
        account: new Account({
          bankAccount:'',
          model: '',
          personalCallToNumber:''
        }),
        user: new User({
          username: '',
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        })
      }),
      course: new Course({
        name: '',
        code: '',
        espb: 0,
        active: true
      })
    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>
      this.courseService.getCourse(params['courseId'])
        .subscribe(res => 
          this.enrollment.course = res.body 
        ));

    this.studentService.getStudents().subscribe(res =>
      this.students = res.body);
  }

  add(): void {
    this.enrollmentService.addEnrollment(this.enrollment, this.enrollment.course.id)
      .subscribe(enrollment => {
        this.enrollmentService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
  

}
