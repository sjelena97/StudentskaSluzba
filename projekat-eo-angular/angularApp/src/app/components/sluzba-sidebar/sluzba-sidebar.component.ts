import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from 'src/app/model/user';
import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { SluzbaSidebarServiceService } from './sluzba-sidebar-service.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    if: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '', if:'' },
    { path: '/profile', title: 'User Profile',  icon:'pe-7s-user', class: '',  if: '' },
    { path: '/courses', title: 'Courses List',  icon:'pe-7s-notebook', class: '',  if: '' },
    { path: '/payments', title: 'Payments',  icon:'pe-7s-cash paymants', class: '',  if: 'isStudent()' },
    { path: '/documents', title: 'Documents',  icon:'pe-7s-note2', class: '', if: 'isStudent()' },
    { path: '/students', title: 'Students',  icon:'pe-7s-users', class: '', if: 'isAdmin()' },
    { path: '/teachers', title: 'Teachers',  icon:'pe-7s-users', class: '', if: 'isAdmin()' },
];

@Component({
  selector: 'app-sluzba-sidebar',
  templateUrl: './sluzba-sidebar.component.html',
  styleUrls: ['./sluzba-sidebar.component.css']
})
export class SluzbaSidebarComponent implements OnInit {

  menuItems: any[];

  user: User;

  subscription: Subscription;

  constructor(private sidebarService: SluzbaSidebarServiceService, private authenticationService:AuthenticationServiceService,private router: Router) 
  { 
    this.subscription = sidebarService.RegenerateData$.subscribe(() =>
      this.getUser()
    );
  }

  ngOnInit() {
    this.getUser();
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  getUser() {
    this.sidebarService.getUser().subscribe(res =>
      this.user = res.body);
  }

  logout():void{
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }

  isStudent():boolean{
    return this.authenticationService.isStudent();
  }

  isAdmin():boolean{
    return this.authenticationService.isAdmin();
  }

}
