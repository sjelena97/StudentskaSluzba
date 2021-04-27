import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthenticationServiceService } from './services/auth/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularApp';

  constructor(private authService: AuthenticationServiceService,
    private router: Router){

  }
  
  ngOnInit() {
  }
  
  loggedIn():boolean{
  return this.authService.isLoggedIn();
  }
  
  login():void{
  this.router.navigate(['login']);
  }
  
  logout():void{
  this.authService.logout();
  this.router.navigate(['main']);
  }
}
