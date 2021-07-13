import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Enrollment } from 'src/app/model/enrollment';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class SluzbaEnrollmentsServiceService {

  private enrollmentsUrl = 'enrollments';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
    this.RegenerateData.next();
  }

  getEnrollments(): Observable<HttpResponse<Enrollment[]>> {
    let username = this.authService.getCurrentUser().username;
    console.log("username: " + username);
    const url = `${this.enrollmentsUrl}/getAllEnrollmentsForUser/${username}`;
    return this.http.get<Enrollment[]>(url, { observe: 'response' });
  }

  addEnrollment(enrollment: Enrollment, courseId: number): Observable<HttpResponse<Enrollment>> {
    const urlPost = `${this.enrollmentsUrl}/addEnrollment/${courseId}`;
    return this.http.post<Enrollment>(urlPost, enrollment, { observe: 'response' });
  }

  deleteEnrollment(enrollmentId: number): Observable<HttpResponse<any>> {
    const url = `${this.enrollmentsUrl}/deleteEnrollment/${enrollmentId}`;
    return this.http.put<any>(url, { observe: 'response' });
  }
}
