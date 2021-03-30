package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.repository.AccountRepository;
import com.spring.projekateo.service.AccountService;

@Service
public class AccountServiceImpl implements AccountService{
	
	@Autowired
	AccountRepository accountRepository;
	
	@Override
	public Account findById(Integer accountId){
		return accountRepository.findById(accountId);
	}
	
	@Override
	public Account findAccountByStudent(Student student){
		return accountRepository.findByStudent(student);
	}
	
	@Override
	public Account save(Account account) {
		return accountRepository.save(account);
	}

}
