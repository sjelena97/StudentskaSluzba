import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

import { AuthenticationServiceService } from '../../services/auth/authentication-service.service';
import { Payment } from '../../model/payment';

@Injectable({
  providedIn: 'root'
})
export class SluzbaPaymentsServiceService {

  private paymentsUrl = 'payments';

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }

  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  announceChange() {
      this.RegenerateData.next();
  }
  
  getPayments(): Observable<HttpResponse<Payment[]>> {
      let username = this.authService.getCurrentUser().username;
      console.log("username: " + username);
      const url = `${this.paymentsUrl}/getAllPaymentsForUser/${username}`;
      return this.http.get<Payment[]>(url, {observe: 'response'});
  }

  getPayment(id: number): Observable<HttpResponse<Payment>> {
    const url = `${this.paymentsUrl}/getPaymentById/${id}`;
    return this.http.get<Payment>(url, {observe: 'response'});
  }

  addPayment(payment: Payment): Observable<HttpResponse<Payment>> {
    const urlPost = `${this.paymentsUrl}/addPayment/${payment.account.id}`;
    return this.http.post<Payment>(urlPost, payment, {observe: 'response'});
  } 

  editPayment(payment: Payment): Observable<HttpResponse<Payment>> {
    const urlPut =`${this.paymentsUrl}/updatePayment/${payment.id}`;
    return this.http.put<Payment>(urlPut, payment, {observe: 'response'});
  }

  deletePayment(paymentId: number): Observable<HttpResponse<any>> {
    const url = `${this.paymentsUrl}/deletePayment/${paymentId}`;
    return this.http.delete<any>(url, {observe: 'response'});
  }
}
