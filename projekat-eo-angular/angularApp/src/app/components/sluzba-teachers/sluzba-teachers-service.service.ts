import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { Teacher } from '../../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class SluzbaTeachersServiceService {

  private teachersUrl = 'teachers';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  getTeachers(): Observable<HttpResponse<Teacher[]>> {
      const url = `${this.teachersUrl}/getAllTeachers`;
      return this.http.get<Teacher[]>(url, {observe: 'response'});
  }
}
