package com.spring.projekateo.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;
import com.spring.projekateo.repository.PaymentRepository;
import com.spring.projekateo.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
    PaymentRepository paymentRepository;
	
	@Override
	public Payment findById(Integer paymentId){
		return paymentRepository.findById(paymentId);
	}
	
	@Override
    public Set<Payment> getAllPaymentsByAccount(Account account){
		Set<Payment> allPayments = paymentRepository.findAllByAccount(account);
        return allPayments;
	}
	
	@Override
	public Payment save(Payment payment) {
		return paymentRepository.save(payment);
	}
	
	@Override
	public void remove(Payment payment) {
		paymentRepository.delete(payment);
	}
	
}
