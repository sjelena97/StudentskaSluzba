import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap } from 'rxjs/operators';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { Account } from 'src/app/model/account';
import { Student } from 'src/app/model/student';
import { User } from 'src/app/model/user';
import { SluzbaStudentsServiceService } from '../sluzba-students/sluzba-students-service.service';
import { Document } from 'src/app/model/document';
import { SluzbaDocumentsServiceService } from '../sluzba-documents/sluzba-documents-service.service';
import { Payment } from 'src/app/model/payment';
import { SluzbaPaymentsServiceService } from '../sluzba-payments/sluzba-payments-service.service';
import { SluzbaAccountServiceService } from '../sluzba-account/sluzba-account-service.service';
import { SluzbaProfileServiceService } from '../sluzba-profile/sluzba-profile-service.service';

@Component({
  selector: 'app-sluzba-student-details',
  templateUrl: './sluzba-student-details.component.html',
  styleUrls: ['./sluzba-student-details.component.css']
})
export class SluzbaStudentDetailsComponent implements OnInit {

  userForm: FormGroup;
  studentForm: FormGroup;
  passwordForm: FormGroup;
  submitted = false;

  student: Student = new Student({ // if we add a new student, create an empty student
    cardName: '',
    account: new Account({
      bankAccount: '',
      model: '',
      personalCallToNumber: ''
    }),
    user: new User({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  });

  documents: Document[];
  payments: Payment[];
  available: 0 | number;

  public showPassword: boolean;
  public showPassword2: boolean;

  mode: string = 'ADD';

  constructor(private formBuilder: FormBuilder, private profileService: SluzbaProfileServiceService, private studentService: SluzbaStudentsServiceService, private accountService: SluzbaAccountServiceService, private documentService: SluzbaDocumentsServiceService, private paymentService: SluzbaPaymentsServiceService,
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  isShowDiv = false;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.studentForm = this.formBuilder.group({
      cardName: ['', Validators.required],
      bankAccount: ['', Validators.required],
      model: ['', Validators.required],
      personalCallToNumber: ['', Validators.required]
    });
    this.passwordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('newPassword', 'confirmNewPassword')
    });

    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      // fetch student if we edit the existing student
      this.route.params.pipe(switchMap((params: Params) =>
        this.studentService.getStudent(+params['id'])))
        .subscribe(res => {
          this.student = res.body;
          this.userForm.get('firstName').setValue(this.student.user.firstName);
          this.userForm.get('lastName').setValue(this.student.user.lastName);
          this.userForm.get('username').setValue(this.student.user.username);
          this.userForm.get('email').setValue(this.student.user.email);
          this.studentForm.get('cardName').setValue(this.student.cardName);
          this.studentForm.get('bankAccount').setValue(this.student.account.bankAccount);
          this.studentForm.get('model').setValue(this.student.account.model);
          this.studentForm.get('personalCallToNumber').setValue(this.student.account.personalCallToNumber);
          this.getAvailableFunds();
          this.getDocuments();
          this.getPayments();
        });
    }
  }

  // convenience getter for easy access to form fields
  get u() { return this.userForm.controls; }
  get s() { return this.studentForm.controls; }
  get p() { return this.passwordForm.controls; }

  private getDocuments(): void {
    this.studentService.getStudentDocuments(this.student.id).subscribe(res =>
      this.documents = res.body);
  }

  private getPayments(): void {
    this.studentService.getAccountPayments(this.student.account.id).subscribe(res =>
      this.payments = res.body);
  }

  private getAvailableFunds(): void {
    this.accountService.getAvailableFunds(this.student.account.id).subscribe(res =>
      this.available = res.body);
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.student.user.firstName = this.userForm.get('firstName').value;
    this.student.user.lastName = this.userForm.get('lastName').value;
    this.student.user.username = this.userForm.get('username').value;
    this.student.user.email = this.userForm.get('email').value;
    console.log("email: " + this.student.user.email);
    console.log("field: " + this.userForm.get('email').value);
    this.student.cardName = this.studentForm.get('cardName').value;
    this.student.account.bankAccount = this.studentForm.get('bankAccount').value;
    this.student.account.model = this.studentForm.get('model').value;
    this.student.account.personalCallToNumber = this.studentForm.get('personalCallToNumber').value;

    this.studentService.addStudent(this.student)
      .subscribe(res => {
        this.studentService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.student.user.firstName = this.userForm.get('firstName').value;
    this.student.user.lastName = this.userForm.get('lastName').value;
    this.student.user.username = this.userForm.get('username').value;
    this.student.user.email = this.userForm.get('email').value;
    this.student.cardName = this.studentForm.get('cardName').value;
    this.student.account.bankAccount = this.studentForm.get('bankAccount').value;
    this.student.account.model = this.studentForm.get('model').value;
    this.student.account.personalCallToNumber = this.studentForm.get('personalCallToNumber').value;

    this.studentService.editStudent(this.student)
      .subscribe(student => {
        this.studentService.announceChange();
        this.goBack();
      });
  }

  updatePassword(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.passwordForm.invalid) {
      return;
    }

    console.log("new: " + this.passwordForm.get('newPassword').value);
    this.profileService.updatePassword(this.student.user.id, this.passwordForm.get('newPassword').value)
      .subscribe(student => {
        this.profileService.announceChange();
        this.goBack();
      });

  }

  gotoAddDocument(): void {
    this.router.navigate(['/addDocument'], { queryParams: { studentId: this.student.id } });
  }


  gotoEditDocument(document: Document): void {
    this.router.navigate(['/editDocument', document.id]);
  }

  deleteDocument(documentId: number, documentTitle: string): void {
    if (confirm("Are you sure to delete document " + documentTitle + "?")) {
      this.documentService.deleteDocument(documentId).subscribe(
        () => this.getDocuments()
      );
    }
  }

  gotoAddPayment(): void {
    this.router.navigate(['/addPayment'], { queryParams: { accountId: this.student.account.id } });
  }


  gotoEditPayment(payment: Payment): void {
    this.router.navigate(['/editPayment', payment.id]);
  }

  deletePayment(paymentId: number): void {
    this.paymentService.deletePayment(paymentId).subscribe(
      () => this.getPayments()
    );
  }

  /*   gotoAddPayment(): void {
      this.router.navigate(['/addPayment'], { queryParams: { accountId: this.student.account.id } });
    }
  
    
    gotoEditPayment(payment: Payment): void {
      this.router.navigate(['/editPayment', payment.id]);
    }
  
    deletePayment(paymentId: number): void {
      this.paymentService.deletePayment(paymentId).subscribe(
        () => this.getPayments()
      );
    }
   */
  goBack(): void {
    this.location.back();
  }


  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

}
