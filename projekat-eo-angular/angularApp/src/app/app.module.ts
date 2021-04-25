import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SluzbaHeaderComponent } from './components/sluzba-header/sluzba-header.component';
import { SluzbaProfileComponent } from './components/sluzba-profile/sluzba-profile.component';
import { SluzbaNavbarComponent } from './components/sluzba-navbar/sluzba-navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { SluzbaLoginComponent } from './components/sluzba-login/sluzba-login.component';
import { SluzbaNotFoundPageComponent } from './components/sluzba-not-found-page/sluzba-not-found-page.component';


const appRoutes: Routes = [
  { path: 'main', component: SluzbaLoginComponent },
  { path: 'profile',      component: SluzbaProfileComponent},
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: '**', component: SluzbaNotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SluzbaHeaderComponent,
    SluzbaProfileComponent,
    SluzbaNavbarComponent,
    SluzbaLoginComponent,
    SluzbaNotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
