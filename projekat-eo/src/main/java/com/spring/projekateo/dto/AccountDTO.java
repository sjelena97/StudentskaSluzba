package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Account;

public class AccountDTO implements Serializable{
	
	private Integer id;
	private double balance;
	
	public AccountDTO() {
		super();
	}
	
	public AccountDTO(Integer id, double balance) {
		super();
		this.id = id;
		this.balance = balance;
	}

	
	public AccountDTO(Account account) {
		this(account.getId(), account.getBalance());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}
	
}

