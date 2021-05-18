import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SluzbaPaymentsComponent } from './components/sluzba-payments/sluzba-payments.component';
import { SluzbaDocumentsComponent } from './components/sluzba-documents/sluzba-documents.component';
import { SluzbaLoginComponent } from './components/sluzba-login/sluzba-login.component';
import { SluzbaCoursesComponent } from './components/sluzba-courses/sluzba-courses.component';
import { SluzbaProfileComponent } from './components/sluzba-profile/sluzba-profile.component';
import { CanActivateAuthGuardService } from './services/auth/can-activate-auth.guard.service';
import { SluzbaNotFoundPageComponent } from './components/sluzba-not-found-page/sluzba-not-found-page.component';

const routes: Routes = [
  { path: 'main', component: SluzbaLoginComponent },
  { path: 'profile', component: SluzbaProfileComponent},
  { path: 'courses', component: SluzbaCoursesComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'payments', component: SluzbaPaymentsComponent, canActivate: [CanActivateAuthGuardService]},
  { path: 'documents', component: SluzbaDocumentsComponent, canActivate: [CanActivateAuthGuardService]},
  { path: '',
    redirectTo: '/main',
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
