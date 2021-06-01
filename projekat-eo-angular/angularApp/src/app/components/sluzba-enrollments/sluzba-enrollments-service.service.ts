import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { Enrollment } from 'src/app/model/enrollment';

@Injectable({
  providedIn: 'root'
})
export class SluzbaEnrollmentsServiceService {

  private enrollmentsUrl = 'enrollments';

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  addEnrollment(enrollment: Enrollment, courseId: number): Observable<HttpResponse<Enrollment>> {
    const urlPost = `${this.enrollmentsUrl}/addEnrollment/${courseId}`;
    return this.http.post<Enrollment>(urlPost, enrollment, {observe: 'response'});
  }
  
  deleteEnrollment(enrollmentId: number): Observable<HttpResponse<any>> {
      const url = `${this.enrollmentsUrl}/deleteEnrollment/${enrollmentId}`;
      return this.http.put<any>(url, {observe: 'response'});
  }
}
