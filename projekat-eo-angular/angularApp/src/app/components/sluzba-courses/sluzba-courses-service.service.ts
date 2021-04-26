import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { Course } from '../../model/course';

@Injectable()
export class SluzbaCoursesServiceService {


  private coursesUrl = 'courses';

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  getCourses(): Observable<HttpResponse<Course[]>> {
      const url = `${this.coursesUrl}/getAllCourses`;
      return this.http.get<Course[]>(this.coursesUrl, {observe: 'response'});
  }

}
