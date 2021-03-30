package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.PaymentDTO;
import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;
import com.spring.projekateo.service.AccountService;
import com.spring.projekateo.service.PaymentService;

@RestController
@RequestMapping(value = "/payments", produces = MediaType.APPLICATION_JSON_VALUE)
public class PaymentController {
	
	@Autowired
    private AccountService accountService;
	
	@Autowired
    private PaymentService paymentService;
	
	@GetMapping("/getAllPaymentsForAccount/{account_id}")
	public  ResponseEntity<List<PaymentDTO>> getAllPaymentsForAccount(@PathVariable("account_id") int account_id){
			Account account = accountService.findById(account_id);
		 	Set<Payment> payments = paymentService.getAllPaymentsByAccount(account);
		 	List<PaymentDTO> paymentsDTO = new ArrayList<>();
			for (Payment p : payments) {
				PaymentDTO paymentDTO = new PaymentDTO();
				paymentDTO.setId(p.getId());
				paymentDTO.setAmount(p.getAmount());
				paymentDTO.setDate(p.getDate());
				paymentDTO.setPurpose(p.getPurpose());
				//we leave account field empty
				
				paymentsDTO.add(paymentDTO);
			}
			return new ResponseEntity<>(paymentsDTO, HttpStatus.OK);
	}

}
