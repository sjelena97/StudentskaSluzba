import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ExamPartTaking } from 'src/app/model/examPartTaking';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { ExamStatus } from 'src/app/model/examStatus';

@Injectable({
  providedIn: 'root'
})
export class SluzbaExamTakingsServiceService {

  private examTakingsUrl = 'examPartTakings';
  private examPartStatusesUrl = 'examPartStatuses';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
    this.RegenerateData.next();
  }

  getExamTaking(id: number): Observable<HttpResponse<ExamPartTaking>> {
    const url = `${this.examTakingsUrl}/getExamTakingById/${id}`;
    return this.http.get<ExamPartTaking>(url, {observe: 'response'});
  }

  getExamTakings(examPartId: number): Observable<HttpResponse<ExamPartTaking[]>> {
    let username = this.authService.getCurrentUser().username;
    console.log("username: " + username);
    const url = `${this.examTakingsUrl}/getAllExamTakingsForUser/${username}/${examPartId}`;
    return this.http.get<ExamPartTaking[]>(url, { observe: 'response' });
  }

  getExamTakingsForStudent(examPartId: number, enrollmentId: number): Observable<HttpResponse<ExamPartTaking[]>> {
    let username = this.authService.getCurrentUser().username;
    console.log("username: " + username);
    const url = `${this.examTakingsUrl}/getAllExamTakingsForStudent/${examPartId}/${enrollmentId}`;
    return this.http.get<ExamPartTaking[]>(url, { observe: 'response' });
  }

  getExamStatuses(): Observable<HttpResponse<ExamStatus[]>> {
    const url = `${this.examPartStatusesUrl}/getAllExamPartStatuses`;
    return this.http.get<ExamStatus[]>(url, {observe: 'response'});
  }

  updateExamTaking(examTaking: ExamPartTaking): Observable<HttpResponse<ExamPartTaking>> {
    const urlPut =`${this.examTakingsUrl}/updateExamTaking/${examTaking.id}`;
    return this.http.put<ExamPartTaking>(urlPut, examTaking, {observe: 'response'});
  }

  canSignUpExam(examPartId: number, selectedEnrollmentId: number): Observable<HttpResponse<Boolean>>{
    const url =`${this.examTakingsUrl}/canSignUp/${examPartId}/${selectedEnrollmentId}`;
    return this.http.get<Boolean>(url, {observe: 'response'});
  }

  canSignOutExam(examPartId: number, selectedEnrollmentId: number): Observable<HttpResponse<Boolean>>{
    const url =`${this.examTakingsUrl}/canSignOut/${examPartId}/${selectedEnrollmentId}`;
    return this.http.get<Boolean>(url, {observe: 'response'});
  }

  signUp(examPartId: number, selectedEnrollmentId: number): Observable<ExamPartTaking>{
    const url =`${this.examTakingsUrl}/signUp/${examPartId}/${selectedEnrollmentId}`;
    return this.http.post<ExamPartTaking>(url, {observe: 'response'});
  }

  signOut(examPartId: number, selectedEnrollmentId: number): Observable<ExamPartTaking>{
    const url =`${this.examTakingsUrl}/signOut/${examPartId}/${selectedEnrollmentId}`;
    return this.http.put<ExamPartTaking>(url, {observe: 'response'});
  }

}
