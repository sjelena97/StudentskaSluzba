import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { Student } from '../../model/student';
import { Document } from 'src/app/model/document';
import { Payment } from 'src/app/model/payment';
import { Enrollment } from 'src/app/model/enrollment';

@Injectable({
  providedIn: 'root'
})
export class SluzbaStudentsServiceService {

  private studentsUrl = 'students';
  private enrollmentsUrl = 'enrollments';
  private documentsUrl = 'documents';
  private paymentsUrl = 'payments';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  getStudentsList(): Observable<HttpResponse<Student[]>> {
    const url = `${this.studentsUrl}/getAllStudentsList`;
    return this.http.get<Student[]>(url, {observe: 'response'});
}
  
  getStudents(params: any): Observable<any>{
      const url = `${this.studentsUrl}/getAllStudents`;
      return this.http.get<any>(  url, { params });
  }

  getStudent(id: number): Observable<HttpResponse<Student>> {
    const url = `${this.studentsUrl}/getStudentById/${id}`;
    return this.http.get<Student>(url, {observe: 'response'});
  }

  addStudent(student: Student): Observable<HttpResponse<Student>> {
    const urlPost = `${this.studentsUrl}/addStudent`;
    return this.http.post<Student>(urlPost, student, {observe: 'response'});
  } 

  editStudent(student: Student): Observable<HttpResponse<Student>> {
    const urlPut =`${this.studentsUrl}/updateStudent/${student.id}`;
    return this.http.put<Student>(urlPut, student, {observe: 'response'});
  }

  deleteStudent(studentId: number): Observable<HttpResponse<any>> {
    const url = `${this.studentsUrl}/deleteStudent/${studentId}`;
    return this.http.put<any>(url, {observe: 'response'});
  }

  getStudentDocuments(studentId: number): Observable<HttpResponse<Document[]>> {
    const url = `${this.documentsUrl}/getAllDocumentsForStudent/${studentId}`;
    return this.http.get<Document[]>(url, {observe: 'response'});
  }

  getAccountPayments(accountId: number): Observable<HttpResponse<Payment[]>> {
    const url = `${this.paymentsUrl}/getAllPaymentsForAccount/${accountId}`;
    return this.http.get<Payment[]>(url, {observe: 'response'});
  }

  getStudentEnrollments(studentId: number): Observable<HttpResponse<Enrollment[]>> {
    const url = `${this.enrollmentsUrl}/getAllEnrollmentsForStudent/${studentId}`;
    return this.http.get<Enrollment[]>(url, {observe: 'response'});
  }

}
