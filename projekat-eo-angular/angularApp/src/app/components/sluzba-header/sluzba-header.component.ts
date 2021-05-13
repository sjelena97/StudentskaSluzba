import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Student } from 'src/app/model/student';
import { SluzbaUserServiceService } from '../sluzba-user/sluzba-user-service.service';
import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';

@Component({
  selector: 'app-sluzba-header',
  templateUrl: './sluzba-header.component.html',
  styleUrls: ['./sluzba-header.component.css']
})
export class SluzbaHeaderComponent implements OnInit {

  user: User;

  constructor(private userService: SluzbaUserServiceService, private authService: AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe(res => 
      this.user = res.body);
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

}
