import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaDocumentsServiceService } from './sluzba-documents-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

interface Document {
  id?: number;
  title: string;
  type: DocumentType;
}

@Component({
  selector: 'app-sluzba-documents',
  templateUrl: './sluzba-documents.component.html',
  styleUrls: ['./sluzba-documents.component.css']
})
export class SluzbaDocumentsComponent implements OnInit {

  documents: Document[];

  subscription: Subscription;

  constructor(private documentService: SluzbaDocumentsServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = documentService.RegenerateData$.subscribe(() =>
      this.getDocuments()
    );
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe(res =>
      this.documents = res.body);
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

}
