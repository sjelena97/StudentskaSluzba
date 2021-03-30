package com.spring.projekateo.service;

import java.util.Set;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;

public interface PaymentService {

	Set<Payment> getAllPaymentsByAccount(Account account);

	Payment save(Payment payment);

	Payment findById(Integer paymentId);

	void remove(Payment payment);

}
