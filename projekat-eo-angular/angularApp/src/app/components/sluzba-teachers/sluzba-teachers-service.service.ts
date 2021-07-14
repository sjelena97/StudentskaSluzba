import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { Teacher } from '../../model/teacher';
import { Teaching } from 'src/app/model/teaching';

@Injectable({
  providedIn: 'root'
})
export class SluzbaTeachersServiceService {

  private teachersUrl = 'teachers';
  private teachingsUrl = 'teachings';

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  getTeachers(): Observable<HttpResponse<Teacher[]>> {
      const url = `${this.teachersUrl}/getAllTeachers`;
      return this.http.get<Teacher[]>(url, {observe: 'response'});
  }

  getTeacher(id: number): Observable<HttpResponse<Teacher>> {
    const url = `${this.teachersUrl}/getTeacherById/${id}`;
    return this.http.get<Teacher>(url, {observe: 'response'});
  }

  addTeacher(teacher: Teacher): Observable<HttpResponse<Teacher>> {
    const urlPost = `${this.teachersUrl}/addTeacher`;
    return this.http.post<Teacher>(urlPost, teacher, {observe: 'response'});
  } 

  editTeacher(teacher: Teacher): Observable<HttpResponse<Teacher>> {
    const urlPut =`${this.teachersUrl}/updateTeacher/${teacher.id}`;
    return this.http.put<Teacher>(urlPut, teacher, {observe: 'response'});
  }

  deleteTeacher(teacherId: number): Observable<HttpResponse<any>> {
    const url = `${this.teachersUrl}/deleteTeacher/${teacherId}`;
    return this.http.put<any>(url, {observe: 'response'});
  }

  getTeacherTeachings(teacherId: number): Observable<HttpResponse<Teaching[]>> {
    const url = `${this.teachingsUrl}/getAllTeachingsForTeacher/${teacherId}`;
    return this.http.get<Teaching[]>(url, {observe: 'response'});
  }
}
