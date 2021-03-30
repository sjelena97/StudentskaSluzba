package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/addPayment/{account_id}")
	public ResponseEntity<PaymentDTO> createPayment(@RequestBody PaymentDTO newPayment, @PathVariable("account_id") int account_id) {
		 
		Account account = accountService.findById(account_id);
		if (account == null) {
			return new ResponseEntity<PaymentDTO>(HttpStatus.BAD_REQUEST);
		}
		Payment payment = new Payment();
		payment.setAmount(newPayment.getAmount());
		payment.setDate(newPayment.getDate());
		payment.setPurpose(newPayment.getPurpose());
		payment.setAccount(account);
				
		payment = paymentService.save(payment);
		return new ResponseEntity<PaymentDTO>(new PaymentDTO(payment), HttpStatus.CREATED);	
	}
	
	@PutMapping("/updatePayment/{payment_id}")
	public ResponseEntity<PaymentDTO> updatePayment(@RequestBody PaymentDTO paymentDTO, @PathVariable("payment_id") int payment_id){
		//a payment must exist
		Payment payment = paymentService.findById(payment_id);
		if (payment == null) {
			return new ResponseEntity<PaymentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		payment.setAmount(paymentDTO.getAmount());
		payment.setDate(paymentDTO.getDate());
		payment.setPurpose(paymentDTO.getPurpose());
		
		payment = paymentService.save(payment);
		
		return new ResponseEntity<PaymentDTO>(new PaymentDTO(payment), HttpStatus.OK);	
	}
	
	@DeleteMapping("/deletePayment/{payment_id}")
	public ResponseEntity<Void> deletePayment(@PathVariable("payment_id") int payment_id){
		Payment payment = paymentService.findById(payment_id);
		if (payment != null){
			paymentService.remove(payment);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {		
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}

}
