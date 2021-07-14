import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { ExamPeriod } from 'src/app/model/examPeriod';

@Injectable({
  providedIn: 'root'
})
export class SluzbaExamPeriodsServiceService {

  private examPeriodsUrl = 'examPeriods';

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
    this.RegenerateData.next();
  }

  getExamPeriod(id: number): Observable<HttpResponse<ExamPeriod>> {
    const url = `${this.examPeriodsUrl}/getExamPeriodById/${id}`;
    return this.http.get<ExamPeriod>(url, {observe: 'response'});
  }

  getActiveExamPeriods(): Observable<HttpResponse<ExamPeriod[]>> {
    const url = `${this.examPeriodsUrl}/getAllActiveExamPeriods`;
    return this.http.get<ExamPeriod[]>(url, {observe: 'response'});
  }

  getExamPeriods(): Observable<HttpResponse<ExamPeriod[]>> {
    const url = `${this.examPeriodsUrl}/getAllExamPeriods`;
    return this.http.get<ExamPeriod[]>(url, {observe: 'response'});
  }

  addExamPeriod(examPeriod: ExamPeriod): Observable<HttpResponse<ExamPeriod>> {
    const urlPost = `${this.examPeriodsUrl}/addExamPeriod`;
    return this.http.post<ExamPeriod>(urlPost, examPeriod, {observe: 'response'});
  } 

  editExamPeriod(examPeriod: ExamPeriod): Observable<HttpResponse<ExamPeriod>> {
    const urlPut =`${this.examPeriodsUrl}/updateExamPeriod/${examPeriod.id}`;
    return this.http.put<ExamPeriod>(urlPut, examPeriod, {observe: 'response'});
  }

  deletePeriod(periodId: number): Observable<HttpResponse<any>> {
    const url = `${this.examPeriodsUrl}/deleteExamPeriod/${periodId}`;
    return this.http.delete<any>(url, {observe: 'response'});
  }
  
}
