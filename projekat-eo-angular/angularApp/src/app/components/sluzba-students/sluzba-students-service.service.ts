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

}
