import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';


@Component({
  selector: 'app-sluzba-navbar',
  templateUrl: './sluzba-navbar.component.html',
  styleUrls: ['./sluzba-navbar.component.css']
})
export class SluzbaNavbarComponent implements OnInit {

  constructor(private authenticationService:AuthenticationServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  logout():void{
    this.authenticationService.logout();
    this.router.navigate(['/main']);
  }

  isStudent():boolean{
    return this.authenticationService.isStudent();
  }

}
