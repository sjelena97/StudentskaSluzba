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

  getActiveExamPeriods(): Observable<HttpResponse<ExamPeriod[]>> {
    const url = `${this.examPeriodsUrl}/getAllActiveExamPeriods`;
    return this.http.get<ExamPeriod[]>(url, {observe: 'response'});
  }

  getExamPeriods(): Observable<HttpResponse<ExamPeriod[]>> {
    const url = `${this.examPeriodsUrl}/getAllExamPeriods`;
    return this.http.get<ExamPeriod[]>(url, {observe: 'response'});
  }
}
