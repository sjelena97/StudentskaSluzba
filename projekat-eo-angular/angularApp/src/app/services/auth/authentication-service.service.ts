import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtUtilsService } from './jwt-utils.service';


@Injectable()
export class AuthenticationServiceService {

  private readonly loginPath = '/auth/login';

  constructor(private http: HttpClient, private jwtUtilsService: JwtUtilsService) { }

  login(username: string, password: string): Observable<boolean> {
    var headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.loginPath, JSON.stringify({ username, password }), { headers })
      .map((res: any) => {
        let token = res && res['token'];
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({
            username: username,
            roles: this.jwtUtilsService.getRoles(token),
            token: token
          }));
          return true;
        }
        else {
          return false;
        }
      })
      .catch((error: any) => {
        if (error.status === 400) {
          return Observable.throw('Ilegal login');
        }
        else {
          return Observable.throw(error.json().error || 'Server error');
        }
      });
  }

  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    if (this.getToken() != '') return true;
    else return false;
  }

  getCurrentUser() {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser);
    }
    else {
      return undefined;
    }
  }

  isStudent(): boolean {
    if (localStorage.currentUser) {
      var user = JSON.parse(localStorage.currentUser);
      if (user.roles[0].some(t=>t.authority === "STUDENT")) return true;
      else return false;
    }
  }

  isTeacher(): boolean {
    if (localStorage.currentUser) {
      var user = JSON.parse(localStorage.currentUser);
      if (user.roles[0].some(t=>t.authority === "TEACHER")) return true;
      else return false;
    }
  }

  isAdmin(): boolean {
    if (localStorage.currentUser) {
      var user = JSON.parse(localStorage.currentUser);
      if (user.roles[0].some(t=>t.authority === "ADMIN")) return true;
      else return false;
    }
  }

  getCurrentUserUsername() {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser.username);
    }
    else {
      return undefined;
    }
  }
}
