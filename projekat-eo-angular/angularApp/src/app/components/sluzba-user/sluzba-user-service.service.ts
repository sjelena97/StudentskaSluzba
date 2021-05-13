import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';


@Injectable({
  providedIn: 'root'
})
export class SluzbaUserServiceService {

  private usersUrl = 'users';

    constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

    private RegenerateData = new Subject<void>();

    RegenerateData$ = this.RegenerateData.asObservable();

    announceChange() {
        this.RegenerateData.next();
    }

   getUser(): Observable<HttpResponse<User>> {
        let username = this.authService.getCurrentUser().username;
        const url = `${this.usersUrl}/getUserByUsername/${username}`;
        return this.http.get<User>(url, {observe: 'response'});
    }
}
