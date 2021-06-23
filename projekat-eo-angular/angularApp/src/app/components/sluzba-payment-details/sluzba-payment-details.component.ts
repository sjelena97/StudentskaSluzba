import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {switchMap} from 'rxjs/operators';

import { Payment } from 'src/app/model/payment';
import { AuthenticationServiceService } from 'src/app/services/auth/authentication-service.service';
import { Account } from 'src/app/model/account';
import { SluzbaPaymentsServiceService } from '../sluzba-payments/sluzba-payments-service.service';
import { SluzbaAccountServiceService } from '../sluzba-account/sluzba-account-service.service';

@Component({
  selector: 'app-sluzba-payment-details',
  templateUrl: './sluzba-payment-details.component.html',
  styleUrls: ['./sluzba-payment-details.component.css']
})
export class SluzbaPaymentDetailsComponent implements OnInit {

  payment: Payment= new Payment({ // if we add a new payment, create an empty payment
    date: null,
    purpose: '',
    amount: 0,
    account: new Account({
      bankAccount:'',
      model: '',
      personalCallToNumber:''
    })
  });

  mode: string = 'ADD';

  constructor(private accountService: SluzbaAccountServiceService, private paymentService: SluzbaPaymentsServiceService, 
    private route: ActivatedRoute, private location: Location, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.mode = 'EDIT';
      // fetch payment if we edit the existing payment
      this.route.params.pipe(switchMap((params: Params) =>
          this.paymentService.getPayment(+params['id'])))
        .subscribe(res => {
          this.payment = res.body;
        });
    }else{
      this.route.queryParams.subscribe(params =>
        this.accountService.getAccount(params['accountId'])
          .subscribe(res => 
            this.payment.account = res.body
          ));
    }
  }

  save(): void {
    this.mode == 'ADD' ? this.add() : this.edit();
  }

  private add(): void {
    this.paymentService.addPayment(this.payment)
      .subscribe(payment => {
        this.paymentService.announceChange();
        this.goBack();
      });
  }

  private edit(): void {
    this.paymentService.editPayment(this.payment)
      .subscribe(payment => {
        this.paymentService.announceChange();
        this.goBack();
      });
  }

  goBack(): void {
    this.location.back();
  }

  isAdmin():boolean{
    return this.authService.isAdmin();
  }

}
