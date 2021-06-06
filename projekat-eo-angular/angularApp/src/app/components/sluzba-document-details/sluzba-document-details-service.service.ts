import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { DocumentType } from 'src/app/model/document-type';
import { Document } from 'src/app/model/document';

@Injectable({
  providedIn: 'root'
})
export class SluzbaDocumentDetailsServiceService {

  private documentUrl = 'documents';
  private documentTypesUrl = 'documentTypes';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  getDocument(id: number): Observable<HttpResponse<Document>> {
    const url = `${this.documentUrl}/getDocumentById/${id}`;
    return this.http.get<Document>(url, {observe: 'response'});
  }

  getDocumentTypes(): Observable<HttpResponse<DocumentType[]>> {
    const url = `${this.documentTypesUrl}/getAllDocumentTypes`;
    return this.http.get<DocumentType[]>(url, {observe: 'response'});
  }

  addDocument(document: Document): Observable<HttpResponse<Document>> {
    const urlPost = `${this.documentUrl}/addDocument`;
    return this.http.post<Document>(urlPost, document, {observe: 'response'});
  } 

  editDocument(document: Document): Observable<HttpResponse<Document>> {
    const urlPut =`${this.documentUrl}/updateDocument/${document.id}`;
    return this.http.put<Document>(urlPut, document, {observe: 'response'});
  }

}
