package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Account;

public class AccountDTO implements Serializable{
	
	private Integer id;
	private double balance;
	private StudentDTO student;
	
	public AccountDTO() {
		super();
	}
	
	public AccountDTO(Integer id, double balance, StudentDTO student) {
		super();
		this.id = id;
		this.balance = balance;
		this.student = student;
	}

	
	public AccountDTO(Account account) {
		this(account.getId(), account.getBalance(), new StudentDTO(account.getStudent()));
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

	public StudentDTO getStudent() {
		return student;
	}

	public void setStudent(StudentDTO student) {
		this.student = student;
	}
	
}

