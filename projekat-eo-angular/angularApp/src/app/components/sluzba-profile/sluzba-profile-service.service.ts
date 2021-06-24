import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { User } from '../../model/user';
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class SluzbaProfileServiceService {

  private usersUrl = 'users';
  private studentsUrl = 'students';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  getUser(): Observable<HttpResponse<User>> {
      let username = this.authService.getCurrentUser().username;
      console.log("username: " + username);
      const url = `${this.usersUrl}/getUserByUsername/${username}`;
      return this.http.get<User>(url, {observe: 'response'});
  }

  getStudent(): Observable<HttpResponse<Student>> {
    let username = this.authService.getCurrentUser().username;
    console.log("username: " + username);
    const url = `${this.studentsUrl}/getStudentByUsername/${username}`;
    return this.http.get<Student>(url, {observe: 'response'});
  }

  editUser(user: User): Observable<HttpResponse<User>> {
    const urlPut =`${this.usersUrl}/updateUser/${user.id}`;
    return this.http.put<User>(urlPut, user, {observe: 'response'});
  }

  updatePassword(id: number, password: String): Observable<HttpResponse<User>> {
    const urlPut =`${this.usersUrl}/updatePassword/${id}`;
    return this.http.put<User>(urlPut, password, {observe: 'response'});
  }
}
