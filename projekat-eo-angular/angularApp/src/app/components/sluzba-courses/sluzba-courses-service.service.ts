import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { Course } from '../../model/course';

@Injectable()
export class SluzbaCoursesServiceService {


  private coursesUrl = 'courses';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  getCourses(): Observable<HttpResponse<Course[]>> {
      let username = this.authService.getCurrentUser().username;
      console.log("username: " + username);
      const url = `${this.coursesUrl}/getAllCoursesForStudent/${username}`;
      return this.http.get<Course[]>(url, {observe: 'response'});
  }

}
