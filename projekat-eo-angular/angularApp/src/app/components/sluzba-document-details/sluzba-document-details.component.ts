import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';

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

  mode: string = 'ADD';

  constructor(private studentService: SluzbaStudentsServiceService, private documentService: SluzbaDocumentDetailsServiceService, 
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    this.documentService.getDocumentTypes().subscribe(res =>
      this.types = res.body);

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      // fetch document if we edit the existing document
      this.route.params.pipe(switchMap((params: Params) =>
          this.documentService.getDocument(+params['id'])))
        .subscribe(res => {
          this.document = res.body;
        });
    }else{
      this.route.queryParams.subscribe(params =>
        this.studentService.getStudent(params['studentId'])
          .subscribe(res => 
            this.document.student = res.body 
          ));
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.documentService.addDocument(this.document)
      .subscribe(document => {
        this.documentService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.documentService.editDocument(this.document)
      .subscribe(document => {
        this.documentService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

  isAdmin():boolean{
    return this.authService.isAdmin();
  }

}
