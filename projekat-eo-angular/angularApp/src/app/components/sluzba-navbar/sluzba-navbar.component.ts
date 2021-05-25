import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ROUTES } from '../sluzba-sidebar/sluzba-sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { User } from 'src/app/model/user';
import { SluzbaNavbarServiceService } from './sluzba-navbar-service.service';

@Component({
  selector: 'app-sluzba-navbar',
  templateUrl: './sluzba-navbar.component.html',
  styleUrls: ['./sluzba-navbar.component.css']
})
export class SluzbaNavbarComponent implements OnInit {

    private listTitles: any[];
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    user: User;
    subscription: Subscription;

    constructor(private navbarService: SluzbaNavbarServiceService,  location: Location,  private element: ElementRef, private authenticationService:AuthenticationServiceService, private router: Router) {
      this.subscription = navbarService.RegenerateData$.subscribe(() =>
      this.getUser()
      );
      this.location = location;
      this.sidebarVisible = false;
    }

    ngOnInit(){
      this.getUser();
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    getUser() {
      this.navbarService.getUser().subscribe(res =>
        this.user = res.body);
    }

    logout():void{
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
            console.log('opened');
        } else {
            this.sidebarClose();
            console.log('closed');
        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }

    isLoggedIn():boolean{
      return this.authenticationService.isLoggedIn();
    }

}
