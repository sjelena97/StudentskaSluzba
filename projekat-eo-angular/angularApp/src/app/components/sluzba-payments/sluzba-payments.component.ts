import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { SluzbaPaymentsServiceService } from './sluzba-payments-service.service';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';

interface Payment {
  id?: number;
  date: Date;
  amount: number;
  purpose: string;
}

@Component({
  selector: 'app-sluzba-payments',
  templateUrl: './sluzba-payments.component.html',
  styleUrls: ['./sluzba-payments.component.css']
})
export class SluzbaPaymentsComponent implements OnInit {

  payments: Payment[];

  subscription: Subscription;

  constructor(private paymentService: SluzbaPaymentsServiceService, private router: Router, private authService: AuthenticationServiceService) {
    this.subscription = paymentService.RegenerateData$.subscribe(() =>
      this.getPayments()
    );
  }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments() {
    this.paymentService.getPayments().subscribe(res =>
      this.payments = res.body);
  }

  isLoggedIn():boolean{
    return this.authService.isLoggedIn();
  }

}
