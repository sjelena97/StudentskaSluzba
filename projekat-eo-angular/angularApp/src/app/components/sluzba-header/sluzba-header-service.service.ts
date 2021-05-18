import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class SluzbaHeaderServiceService {

  private usersUrl = 'users';

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
}
