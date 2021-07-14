import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { ExamPart } from 'src/app/model/examPart';
import { ExamPartType } from 'src/app/model/examPartType';

@Injectable({
  providedIn: 'root'
})
export class SluzbaExamsServiceService {
  
  private examPartsUrl = 'examParts';
  private examPartTypesUrl = 'examPartTypes';

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
    this.RegenerateData.next();
  }

  getExamPart(id: number): Observable<HttpResponse<ExamPart>> {
    const url = `${this.examPartsUrl}/getExamPartById/${id}`;
    return this.http.get<ExamPart>(url, {observe: 'response'});
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

  getExamPartTypes(): Observable<HttpResponse<ExamPartType[]>> {
    const url = `${this.examPartTypesUrl}/getAllExamPartTypes`;
    return this.http.get<ExamPartType[]>(url, {observe: 'response'});
  }

  addExamPart(examPart: ExamPart): Observable<HttpResponse<ExamPart>> {
    const urlPost = `${this.examPartsUrl}/addExamPart`;
    return this.http.post<ExamPart>(urlPost, examPart, {observe: 'response'});
  } 

  editExamPart(examPart: ExamPart): Observable<HttpResponse<ExamPart>> {
    const urlPut =`${this.examPartsUrl}/updateExamPart/${examPart.id}`;
    return this.http.put<ExamPart>(urlPut, examPart, {observe: 'response'});
  }
  
}
