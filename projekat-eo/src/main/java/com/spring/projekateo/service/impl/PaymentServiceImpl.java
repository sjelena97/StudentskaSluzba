package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;
import com.spring.projekateo.repository.PaymentRepository;
import com.spring.projekateo.service.PaymentService;

public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
    PaymentRepository paymentRepository;
	
	@Override
    public List<Payment> getAllPaymentsByAccount(Account account){
		List<Payment> allPayments = paymentRepository.findAllByAccount(account);
        return allPayments;
	}

}
