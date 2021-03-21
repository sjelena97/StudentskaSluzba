package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;

public interface PaymentService {

	List<Payment> getAllPaymentsByAccount(Account account);

}
