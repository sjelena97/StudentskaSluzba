import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';

@Component({
  selector: 'app-sluzba-login',
  templateUrl: './sluzba-login.component.html',
  styleUrls: ['./sluzba-login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SluzbaLoginComponent implements OnInit {

  public user;

  public wrongUsernameOrPass:boolean;

  constructor(private authenticationService:AuthenticationServiceService,
              private router: Router) {
    this.user = {};
    this.wrongUsernameOrPass = false;
   }

  ngOnInit() {
  }

  login():void{
    this.authenticationService.login(this.user.username, this.user.password).subscribe(
      (loggedIn:boolean) => {
        if(loggedIn){
          this.router.navigate(['/dashboard']).then(() => {
            window.location.reload();
          });;
        }
      }
    ,
    (err:Error) => {
      if(err.toString()==='Ilegal login'){
        this.wrongUsernameOrPass = true;
        console.log(err);
      }
      else{
        Observable.throw(err);
      }
    });
  }

}
