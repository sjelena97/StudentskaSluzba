import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SluzbaHeaderComponent } from './components/sluzba-header/sluzba-header.component';
import { SluzbaProfileComponent } from './components/sluzba-profile/sluzba-profile.component';
import { SluzbaNavbarComponent } from './components/sluzba-navbar/sluzba-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SluzbaHeaderComponent,
    SluzbaProfileComponent,
    SluzbaNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
