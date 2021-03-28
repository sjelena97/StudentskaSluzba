package com.spring.projekateo.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.service.AccountService;
import com.spring.projekateo.service.PaymentService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/payments", produces = MediaType.APPLICATION_JSON_VALUE)
public class PaymentController {
	
	@Autowired
    private AccountService accountService;
	
	@Autowired
    private StudentService studentService;
	
	@Autowired
    private PaymentService paymentService;
	
	@GetMapping("/getAllPaymentsForStudent/{student_id}")
	public Set<Payment> getAllPaymentsForStudent(@PathVariable("student_id") int student_id){
			Student student = studentService.findById(student_id);
			Account account = accountService.findAccountByStudent(student);
		 	Set<Payment> payments = paymentService.getAllPaymentsByAccount(account);
		    return payments; 
	}

}
