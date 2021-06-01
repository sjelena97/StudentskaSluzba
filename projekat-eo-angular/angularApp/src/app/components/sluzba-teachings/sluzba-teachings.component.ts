import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Teacher } from 'src/app/model/teacher';
import { Teaching } from 'src/app/model/teaching';

import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { SluzbaTeachersServiceService } from '../sluzba-teachers/sluzba-teachers-service.service';
import { SluzbaCoursesServiceService } from '../sluzba-courses/sluzba-courses-service.service';
import { SluzbaTeachingsServiceService } from './sluzba-teachings-service.service';
import { User } from 'src/app/model/user';
import { Course } from 'src/app/model/course';
import { TeachingType } from 'src/app/model/teaching-type';


@Component({
  selector: 'app-sluzba-teachings',
  templateUrl: './sluzba-teachings.component.html',
  styleUrls: ['./sluzba-teachings.component.css']
})
export class SluzbaTeachingsComponent implements OnInit {
  
  teaching: Teaching;
  teachers: Teacher[];
  types: TeachingType[];

  // for date picker values
  ngbStartDate: NgbDateStruct;
  ngbEndDate: NgbDateStruct;

  constructor(private route: ActivatedRoute, private courseService: SluzbaCoursesServiceService,
    private teacherService: SluzbaTeachersServiceService, private teachingService: SluzbaTeachingsServiceService,
    private location: Location) {
    this.teaching = new Teaching({
      startDate: null,
      endDate: null,
      teacher: new Teacher({
        user: new User({
          username: '',
          firstName: '',
          lastName: ''
        })
      }),
      course: new Course({
        name: '',
        code: '',
        espb: 0,
        active: true
      }),
      type: new TeachingType({
        name: '',
        code: ''
      })
    });

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>
      this.courseService.getCourse(params['courseId'])
        .subscribe(res => 
          this.teaching.course = res.body 
        ));

    this.teacherService.getTeachers().subscribe(res =>
      this.teachers = res.body);

    this.teachingService.getTeachingTypes().subscribe(res =>
      this.types = res.body);
  }

  add(): void {
    // convert NgbDateStruct dates to Date objects
    this.teaching.startDate = new Date(this.ngbStartDate.year, this.ngbStartDate.month-1, this.ngbStartDate.day);
    this.teaching.endDate = new Date(this.ngbEndDate.year, this.ngbEndDate.month-1, this.ngbEndDate.day);

    this.teachingService.addTeaching(this.teaching, this.teaching.course.id)
      .subscribe(teaching => {
        this.teachingService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }
  


}
