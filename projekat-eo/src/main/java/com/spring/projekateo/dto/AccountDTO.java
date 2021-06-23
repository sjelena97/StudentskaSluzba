package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Account;

public class AccountDTO implements Serializable{
	
	private Integer id;
	private String bankAccount;
	private String model;
	private String personalCallToNumber;
	
	public AccountDTO() {
		super();
	}
	
	public AccountDTO(Integer id, String bankAccount, String model, String personalCallToNumber) {
		super();
		this.id = id;
		this.bankAccount = bankAccount;
		this.model = model;
		this.personalCallToNumber = personalCallToNumber;
	}

	
	public AccountDTO(Account account) {
		this(account.getId(), account.getBankAccount(), account.getModel(), account.getPersonalCallToNumber());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBankAccount() {
		return bankAccount;
	}

	public void setBankAccount(String bankAccount) {
		this.bankAccount = bankAccount;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getPersonalCallToNumber() {
		return personalCallToNumber;
	}

	public void setPersonalCallToNumber(String personalCallToNumber) {
		this.personalCallToNumber = personalCallToNumber;
	}

}

