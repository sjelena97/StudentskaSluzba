import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
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

  upload(file: File, studentId: number, typeId: number): Observable<HttpResponse<Document>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const urlPost = `${this.documentUrl}/upload/${studentId}/${typeId}`;
    return this.http.post<Document>(urlPost, formData, {observe: 'response'});
  }

}
