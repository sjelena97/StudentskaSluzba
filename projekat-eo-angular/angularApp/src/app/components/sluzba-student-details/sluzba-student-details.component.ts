import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import {switchMap} from 'rxjs/operators';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { Account } from 'src/app/model/account';
import { Student } from 'src/app/model/student';
import { User } from 'src/app/model/user';
import { SluzbaStudentsServiceService } from '../sluzba-students/sluzba-students-service.service';
import { Document } from 'src/app/model/document';
import { SluzbaDocumentsServiceService } from '../sluzba-documents/sluzba-documents-service.service';

@Component({
  selector: 'app-sluzba-student-details',
  templateUrl: './sluzba-student-details.component.html',
  styleUrls: ['./sluzba-student-details.component.css']
})
export class SluzbaStudentDetailsComponent implements OnInit {

  student: Student = new Student({ // if we add a new student, create an empty student
    cardName: '',
    account: new Account({
      balance: 0
    }),
    user: new User({
      username: '',
      firstName: '',
      lastName: '',
      password: ''
    })
  });

  documents: Document[];

  mode: string = 'ADD';

  constructor(private studentService: SluzbaStudentsServiceService, private documentService: SluzbaDocumentsServiceService,
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      // fetch student if we edit the existing student
      this.route.params.pipe(switchMap((params: Params) =>
          this.studentService.getStudent(+params['id'])))
        .subscribe(res => {
          this.student = res.body;
          this.getDocuments();
        });
    }
  }

  private getDocuments(): void {
    this.studentService.getStudentDocuments(this.student.id).subscribe(res =>
      this.documents = res.body);
  }


  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.studentService.addStudent(this.student)
      .subscribe(res => {
        this.studentService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.studentService.editStudent(this.student)
      .subscribe(course => {
        this.studentService.announceChange();
        this.goBack();
      });
  }

  gotoAddDocument(): void {
    this.router.navigate(['/addDocument'], { queryParams: { studentId: this.student.id } });
  }

  
  gotoEditDocument(document: Document): void {
    this.router.navigate(['/editDocument', document.id]);
  }

  deleteDocument(documentId: number): void {
    this.documentService.deleteDocument(documentId).subscribe(
      () => this.getDocuments()
    );
  }

  goBack(): void {
    this.location.back();
  }

  
  isAdmin():boolean{
    return this.authService.isAdmin();
  }

}
