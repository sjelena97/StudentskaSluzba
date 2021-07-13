import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { Teaching } from 'src/app/model/teaching';
import { TeachingType } from 'src/app/model/teaching-type';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class SluzbaTeachingsServiceService {

  private teachingsUrl = 'teachings';
  private teachingTypesUrl = 'teachingTypes';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  getTeachings(): Observable<HttpResponse<Teaching[]>> {
    let username = this.authService.getCurrentUser().username;
    console.log("username: " + username);
    const url = `${this.teachingsUrl}/getAllTeachingsForUser/${username}`;
    return this.http.get<Teaching[]>(url, { observe: 'response' });
  }
  
  addTeaching(teaching: Teaching, courseId: number): Observable<HttpResponse<Teaching>> {
    const urlPost = `${this.teachingsUrl}/addTeaching/${courseId}`;
    return this.http.post<Teaching>(urlPost, teaching, {observe: 'response'});
  }
  
  deleteTeaching(teachingId: number): Observable<HttpResponse<any>> {
      const url = `${this.teachingsUrl}/deleteTeaching/${teachingId}`;
      return this.http.put<any>(url, {observe: 'response'});
  }

  getTeachingTypes(): Observable<HttpResponse<TeachingType[]>> {
    const url = `${this.teachingTypesUrl}/getAllTeachingTypes`;
    return this.http.get<TeachingType[]>(url, {observe: 'response'});
  }

}
