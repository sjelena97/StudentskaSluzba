import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';
import { HttpEventType, HttpResponse } from '@angular/common/http';

import { SluzbaStudentsServiceService } from '../sluzba-students/sluzba-students-service.service';
import { SluzbaDocumentDetailsServiceService } from './sluzba-document-details-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { DocumentType } from 'src/app/model/document-type';
import { Student } from 'src/app/model/student';
import { Account } from 'src/app/model/account';
import { User } from 'src/app/model/user';
import { Document } from 'src/app/model/document';

@Component({
  selector: 'app-sluzba-document-details',
  templateUrl: './sluzba-document-details.component.html',
  styleUrls: ['./sluzba-document-details.component.css']
})
export class SluzbaDocumentDetailsComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';

  document: Document= new Document({ // if we add a new document, create an empty document
    title: '',
    url:'',
    type: new DocumentType({
      name: '',
      code: ''
    }),
    student: new Student({
      cardName: '',
      account: new Account({
        bankAccount:'',
        model: '',
        personalCallToNumber:''
      }),
      user: new User({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      })
    })
  });

  types: DocumentType[];

  constructor(private studentService: SluzbaStudentsServiceService, private documentService: SluzbaDocumentDetailsServiceService, 
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    this.documentService.getDocumentTypes().subscribe(res =>
      this.types = res.body);


      this.route.queryParams.subscribe(params =>
        this.studentService.getStudent(params['studentId'])
          .subscribe(res => 
            this.document.student = res.body 
          ));
  }


  goBack(): void {
    this.location.back();
  }

  isAdmin():boolean{
    return this.authService.isAdmin();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  upload(): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.documentService.upload(this.currentFile, this.document.student.id, this.document.type.id).subscribe(
          document => {
            this.documentService.announceChange();
            this.goBack();
          });
      }

      this.selectedFiles = undefined;
    }
  }

}
