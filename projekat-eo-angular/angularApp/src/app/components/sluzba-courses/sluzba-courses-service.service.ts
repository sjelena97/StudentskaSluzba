import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { Course } from '../../model/course';
import { Enrollment } from 'src/app/model/enrollment';

@Injectable()
export class SluzbaCoursesServiceService {

  private coursesUrl = 'courses';
  private enrollmentsUrl = 'enrollments';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  getCourses(): Observable<HttpResponse<Course[]>> {
      let username = this.authService.getCurrentUser().username;
      console.log("username: " + username);
      const url = `${this.coursesUrl}/getAllCoursesForUser/${username}`;
      return this.http.get<Course[]>(url, {observe: 'response'});
  }

  getCourse(id: number): Observable<HttpResponse<Course>> {
    const url = `${this.coursesUrl}/getCourseById/${id}`;
    return this.http.get<Course>(url, {observe: 'response'});
  }

  addCourse(course: Course): Observable<HttpResponse<Course>> {
    const urlPost = `${this.coursesUrl}/addCourse`;
    return this.http.post<Course>(urlPost, course, {observe: 'response'});
  } 

  editCourse(course: Course): Observable<HttpResponse<Course>> {
    const urlPut =`${this.coursesUrl}/updateCourse/${course.id}`;
    return this.http.put<Course>(urlPut, course, {observe: 'response'});
  }

  deleteCourse(courseId: number): Observable<HttpResponse<any>> {
    const url = `${this.coursesUrl}/deleteCourse/${courseId}`;
    return this.http.put<any>(url, {observe: 'response'});
  }

  getCourseEnrollments(courseId: number): Observable<HttpResponse<Enrollment[]>> {
    const url = `${this.enrollmentsUrl}/getAllEnrollmentsForCourse/${courseId}`;
    return this.http.get<Enrollment[]>(url, {observe: 'response'});
  }

}
