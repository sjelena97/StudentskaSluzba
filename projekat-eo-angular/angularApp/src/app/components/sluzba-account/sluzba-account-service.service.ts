import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { Account } from 'src/app/model/account';

@Injectable({
  providedIn: 'root'
})
export class SluzbaAccountServiceService {

  private accountUrl = 'accounts';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }

  getAccount(id: number): Observable<HttpResponse<Account>> {
    const url = `${this.accountUrl}/getAccountById/${id}`;
    return this.http.get<Account>(url, {observe: 'response'});
  }

  getAvailableFunds(id: number): Observable<HttpResponse<number>> {
    const url = `${this.accountUrl}/getAvailableFundsForAccount/${id}`;
    return this.http.get<number>(url, {observe: 'response'});
  }

}
