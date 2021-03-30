package com.spring.projekateo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.AccountDTO;
import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.service.AccountService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/accounts", produces = MediaType.APPLICATION_JSON_VALUE)
public class AccountController {
	
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
	
	@PutMapping("/updateAccountBalance/{account_id}")
	public ResponseEntity<AccountDTO> updateAccount(@RequestBody AccountDTO accountDTO, @PathVariable("account_id") int id){
		//a account must exist
		Account account = accountService.findById(id);
		if (account == null) {
			return new ResponseEntity<AccountDTO>(HttpStatus.BAD_REQUEST);
		}
		account.setBalance(accountDTO.getBalance());

		account = accountService.save(account);
		return new ResponseEntity<AccountDTO>(new AccountDTO(account), HttpStatus.OK);	

	}
	
}
