import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { Teaching } from 'src/app/model/teaching';
import { TeachingType } from 'src/app/model/teaching-type';

@Injectable({
  providedIn: 'root'
})
export class SluzbaTeachingsServiceService {

  private teachingsUrl = 'teachings';
  private teachingTypesUrl = 'teachingTypes';

  constructor(private http: HttpClient) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
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
