import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { Document } from '../../model/document';


@Injectable({
  providedIn: 'root'
})
export class SluzbaDocumentsServiceService {

  private documentsUrl = 'documents';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  download(documentId: number): Observable<Blob> {
    const url = `${this.documentsUrl}/download/${documentId}`;
    return this.http.get(url, {responseType: 'blob'});
  }
  
  getDocuments(): Observable<HttpResponse<Document[]>> {
      let username = this.authService.getCurrentUser().username;
      console.log("username: " + username);
      const url = `${this.documentsUrl}/getAllDocumentsForUser/${username}`;
      return this.http.get<Document[]>(url, {observe: 'response'});
  }

  deleteDocument(documentId: number): Observable<HttpResponse<any>> {
    const url = `${this.documentsUrl}/deleteDocument/${documentId}`;
    return this.http.put<any>(url, {observe: 'response'});
  }

}
