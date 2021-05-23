import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SluzbaHeaderComponent } from './components/sluzba-header/sluzba-header.component';
import { SluzbaProfileComponent } from './components/sluzba-profile/sluzba-profile.component';
import { SluzbaNavbarComponent } from './components/sluzba-navbar/sluzba-navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { SluzbaLoginComponent } from './components/sluzba-login/sluzba-login.component';
import { SluzbaNotFoundPageComponent } from './components/sluzba-not-found-page/sluzba-not-found-page.component';
import { SluzbaCoursesComponent } from './components/sluzba-courses/sluzba-courses.component';
import { SluzbaCoursesServiceService } from './components/sluzba-courses/sluzba-courses-service.service';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    SluzbaHeaderComponent,
    SluzbaProfileComponent,
    SluzbaNavbarComponent,
    SluzbaLoginComponent,
    SluzbaNotFoundPageComponent,
    SluzbaCoursesComponent,
    SluzbaPaymentsComponent,
    SluzbaDocumentsComponent,
    SluzbaStudentsComponent,
    SluzbaTeachersComponent,
    SluzbaCourseDetailsComponent,
    SluzbaEnrollmentsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
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
