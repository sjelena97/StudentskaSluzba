import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class SluzbaUserServiceService {

  private usersUrl = 'users';

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  addUser(user: User): Observable<HttpResponse<User>> {
    const urlPost = `${this.usersUrl}/addUser`;
    return this.http.post<User>(urlPost, user, {observe: 'response'});
  } 
}
