import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CanActivateAuthGuardService implements CanActivate {

  constructor(private authenticationService: AuthenticationServiceService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authenticationService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/main']);
      return false;
    }
  }

}
