import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class SluzbaStudentsServiceService {

  private studentsUrl = 'students';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  getStudents(): Observable<HttpResponse<Student[]>> {
      const url = `${this.studentsUrl}/getAllStudents`;
      return this.http.get<Student[]>(url, {observe: 'response'});
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

}
