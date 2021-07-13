import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { ExamPart } from 'src/app/model/examPart';

@Injectable({
  providedIn: 'root'
})
export class SluzbaExamsServiceService {
  
  private examPartsUrl = 'examParts';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
    this.RegenerateData.next();
  }

  getExamPartsForCourse(id: number): Observable<HttpResponse<ExamPart[]>> {
    const url = `${this.examPartsUrl}/getAllExamPartsForCourse/${id}`;
    return this.http.get<ExamPart[]>(url, { observe: 'response' });
  }

  getExamPartsForEnrollment(id: number): Observable<HttpResponse<ExamPart[]>> {
    const url = `${this.examPartsUrl}/getAllExamPartsForEnrollment/${id}`;
    return this.http.get<ExamPart[]>(url, { observe: 'response' });
  }

  getExamPartsForTeaching(id: number): Observable<HttpResponse<ExamPart[]>> {
    const url = `${this.examPartsUrl}/getAllExamPartsForTeaching/${id}`;
    return this.http.get<ExamPart[]>(url, { observe: 'response' });
  }
}
