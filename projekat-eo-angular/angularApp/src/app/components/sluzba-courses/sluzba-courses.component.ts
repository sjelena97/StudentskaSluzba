import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaCoursesServiceService } from './sluzba-courses-service.service';

interface Course {
  id?: number;
  name: string;
  ESPB: number;
}

const COURSES: Course[] = [
  {
    name: 'Baze podataka',
    ESPB: 6
  },
  {
    name: 'Matematika 1',
    ESPB: 8
  },
  {
    name: 'Osnove programiranja',
    ESPB: 8
  },
  {
    name: 'Matematika 2',
    ESPB: 8
  }
];


@Component({
  selector: 'app-sluzba-courses',
  templateUrl: './sluzba-courses.component.html',
  styleUrls: ['./sluzba-courses.component.css']
})
export class SluzbaCoursesComponent implements OnInit {

  page = 1;
  pageSize = 4;
  courses: Course[];
  collectionSize : number = 0;

  subscription: Subscription;

  constructor(private courseService: SluzbaCoursesServiceService, private router: Router) {
    this.subscription = courseService.RegenerateData$.subscribe(() =>
      this.getCourses()
    );
  }

  ngOnInit(): void {
    this.getCourses();
    this.getCollectionSize();
  }

  getCourses() {
    this.courseService.getCourses().subscribe(res =>
      this.courses = res.body);
  }

  getCollectionSize(){
    this.collectionSize = this.courses.length;
  }

  refreshCourses() {
    this.courses = this.courses
      .map((course, i) => ({id: i + 1, ...course}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
