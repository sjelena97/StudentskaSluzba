import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SluzbaPaymentsComponent } from './components/sluzba-payments/sluzba-payments.component';
import { SluzbaDocumentsComponent } from './components/sluzba-documents/sluzba-documents.component';
import { SluzbaLoginComponent } from './components/sluzba-login/sluzba-login.component';
import { SluzbaCoursesComponent } from './components/sluzba-courses/sluzba-courses.component';
import { SluzbaProfileComponent } from './components/sluzba-profile/sluzba-profile.component';
import { SluzbaStudentsComponent } from './components/sluzba-students/sluzba-students.component';
import { CanActivateAuthGuardService } from './services/auth/can-activate-auth.guard.service';
import { SluzbaNotFoundPageComponent } from './components/sluzba-not-found-page/sluzba-not-found-page.component';
import { SluzbaTeachersComponent } from './components/sluzba-teachers/sluzba-teachers.component';
import { SluzbaCourseDetailsComponent } from './components/sluzba-course-details/sluzba-course-details.component';
import { SluzbaHomeComponent } from './components/sluzba-home/sluzba-home.component';
import { SluzbaSidebarComponent } from './components/sluzba-sidebar/sluzba-sidebar.component';
import { SluzbaEnrollmentsComponent } from './components/sluzba-enrollments/sluzba-enrollments.component';
import { SluzbaTeachingsComponent } from './components/sluzba-teachings/sluzba-teachings.component';
import { SluzbaStudentDetailsComponent } from './components/sluzba-student-details/sluzba-student-details.component';
import { SluzbaDocumentDetailsComponent } from './components/sluzba-document-details/sluzba-document-details.component';
import { SluzbaPaymentDetailsComponent } from './components/sluzba-payment-details/sluzba-payment-details.component';
import { SluzbaTeacherDetailsComponent } from './components/sluzba-teacher-details/sluzba-teacher-details.component';
import { SluzbaExamsComponent } from './components/sluzba-exams/sluzba-exams.component';
import { SluzbaExamDetailsComponent } from './components/sluzba-exam-details/sluzba-exam-details.component';
import { SluzbaExamTakingsComponent } from './components/sluzba-exam-takings/sluzba-exam-takings.component';
import { SluzbaExamTakingDetailsComponent } from './components/sluzba-exam-taking-details/sluzba-exam-taking-details.component';
import { SluzbaUserComponent } from './components/sluzba-user/sluzba-user.component';
import { SluzbaExamPeriodsComponent } from './components/sluzba-exam-periods/sluzba-exam-periods.component';
import { SluzbaExamPeriodDetailsComponent } from './components/sluzba-exam-period-details/sluzba-exam-period-details.component';

const routes: Routes = [
  { path: 'dashboard', component: SluzbaHomeComponent },
  { path: 'login', component: SluzbaLoginComponent },
  { path: 'profile', component: SluzbaProfileComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'courses', component: SluzbaCoursesComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'exams', component: SluzbaExamsComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'takings', component: SluzbaExamTakingsComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'payments', component: SluzbaPaymentsComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'documents', component: SluzbaDocumentsComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'students', component: SluzbaStudentsComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'teachers', component: SluzbaTeachersComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'periods', component: SluzbaExamPeriodsComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'addCourse', component: SluzbaCourseDetailsComponent },
  { path: 'editCourse/:id', component: SluzbaCourseDetailsComponent },
  { path: 'addEnrollment', component: SluzbaEnrollmentsComponent },
  { path: 'addTeaching', component: SluzbaTeachingsComponent },
  { path: 'addStudent', component: SluzbaStudentDetailsComponent },
  { path: 'editStudent/:id', component: SluzbaStudentDetailsComponent },
  { path: 'addDocument', component: SluzbaDocumentDetailsComponent },
  { path: 'addPayment', component: SluzbaPaymentDetailsComponent },
  { path: 'editPayment/:id', component: SluzbaPaymentDetailsComponent },
  { path: 'addTeacher', component: SluzbaTeacherDetailsComponent },
  { path: 'editTeacher/:id', component: SluzbaTeacherDetailsComponent },
  { path: 'addExamPart', component: SluzbaExamDetailsComponent },
  { path: 'editExamPart/:id', component: SluzbaExamDetailsComponent },
  { path: 'editTaking/:id', component: SluzbaExamTakingDetailsComponent },
  { path: 'addExamPeriod', component: SluzbaExamPeriodDetailsComponent },
  { path: 'editExamPeriod/:id', component: SluzbaExamPeriodDetailsComponent },
  { path: 'addUser', component: SluzbaUserComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: SluzbaNotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
