package com.spring.projekateo.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.AccountDTO;
import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.service.AccountService;
import com.spring.projekateo.service.PaymentService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/accounts", produces = MediaType.APPLICATION_JSON_VALUE)
public class AccountController {
	
	@Autowired
    private PaymentService paymentService;
	
	@Autowired
    private AccountService accountService;
	
	@Autowired
    private StudentService studentService;
	
	@GetMapping("/getAccountForStudent/{student_id}")
	public ResponseEntity<AccountDTO> getAccountByStudent(@PathVariable("student_id") int student_id) {
		Student student = studentService.findById(student_id);
		Account account = accountService.findAccountByStudent(student);
		if(account == null){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}		
		return new ResponseEntity<>(new AccountDTO(account), HttpStatus.OK);
	}
	
	@GetMapping("getAccountById/{account_id}")
	public ResponseEntity<AccountDTO> getAccountById(@PathVariable("account_id") int account_id) {
		Account account = accountService.findById(account_id);
		if (account == null) {
			return new ResponseEntity<AccountDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<AccountDTO>(new AccountDTO(account), HttpStatus.OK);
		}
	}
	
	@GetMapping("getAvailableFundsForAccount/{account_id}")
	public ResponseEntity<Double> getAvailableFunds(@PathVariable("account_id") int account_id) {
		Account account = accountService.findById(account_id);
		if (account == null) {
			return new ResponseEntity<Double>(HttpStatus.BAD_REQUEST);
		} else {
			double available = 0;
			Set<Payment> payments = paymentService.getAllPaymentsByAccount(account);
			for(Payment p : payments) {
				available+= p.getAmount();
			}
			System.out.println(available);
			
			return new ResponseEntity<Double>(available, HttpStatus.OK);
		}
	}
	
}
