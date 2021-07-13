import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SluzbaProfileComponent } from './components/sluzba-profile/sluzba-profile.component';

import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SluzbaLoginComponent } from './components/sluzba-login/sluzba-login.component';
import { SluzbaNotFoundPageComponent } from './components/sluzba-not-found-page/sluzba-not-found-page.component';
import { SluzbaCoursesComponent } from './components/sluzba-courses/sluzba-courses.component';
import { SluzbaCoursesServiceService } from './components/sluzba-courses/sluzba-courses-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtUtilsService } from './services/auth/jwt-utils.service';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationServiceService } from './services/auth/authentication-service.service';
import { CanActivateAuthGuardService } from './services/auth/can-activate-auth.guard.service';
import { SluzbaPaymentsComponent } from './components/sluzba-payments/sluzba-payments.component';
import { SluzbaDocumentsComponent } from './components/sluzba-documents/sluzba-documents.component';
import { SluzbaStudentsComponent } from './components/sluzba-students/sluzba-students.component';
import { SluzbaTeachersComponent } from './components/sluzba-teachers/sluzba-teachers.component';
import { SluzbaCourseDetailsComponent } from './components/sluzba-course-details/sluzba-course-details.component';
import { SluzbaEnrollmentsComponent } from './components/sluzba-enrollments/sluzba-enrollments.component';
import { SluzbaHomeComponent } from './components/sluzba-home/sluzba-home.component';
import { SluzbaNavbarComponent } from './components/sluzba-navbar/sluzba-navbar.component';
import { SluzbaSidebarComponent } from './components/sluzba-sidebar/sluzba-sidebar.component';
import { SluzbaTeachingsComponent } from './components/sluzba-teachings/sluzba-teachings.component';
import { SluzbaStudentDetailsComponent } from './components/sluzba-student-details/sluzba-student-details.component';
import { SluzbaDocumentDetailsComponent } from './components/sluzba-document-details/sluzba-document-details.component';
import { SluzbaPaymentDetailsComponent } from './components/sluzba-payment-details/sluzba-payment-details.component';
import { SluzbaTeacherDetailsComponent } from './components/sluzba-teacher-details/sluzba-teacher-details.component';
import { SluzbaExamsComponent } from './components/sluzba-exams/sluzba-exams.component';
import { SluzbaExamDetailsComponent } from './components/sluzba-exam-details/sluzba-exam-details.component';
import { SluzbaExamPeriodsComponent } from './components/sluzba-exam-periods/sluzba-exam-periods.component';

@NgModule({
  declarations: [
    AppComponent,
    SluzbaProfileComponent,
    SluzbaLoginComponent,
    SluzbaNotFoundPageComponent,
    SluzbaCoursesComponent,
    SluzbaPaymentsComponent,
    SluzbaDocumentsComponent,
    SluzbaStudentsComponent,
    SluzbaTeachersComponent,
    SluzbaCourseDetailsComponent,
    SluzbaEnrollmentsComponent,
    SluzbaHomeComponent,
    SluzbaNavbarComponent,
    SluzbaSidebarComponent,
    SluzbaTeachingsComponent,
    SluzbaStudentDetailsComponent,
    SluzbaDocumentDetailsComponent,
    SluzbaPaymentDetailsComponent,
    SluzbaTeacherDetailsComponent,
    SluzbaExamsComponent,
    SluzbaExamDetailsComponent,
    SluzbaExamPeriodsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    SluzbaCoursesServiceService,
    AuthenticationServiceService,
    CanActivateAuthGuardService,
    JwtUtilsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
