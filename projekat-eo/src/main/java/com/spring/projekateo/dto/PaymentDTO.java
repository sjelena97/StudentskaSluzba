package com.spring.projekateo.dto;

import java.io.Serializable;
import java.util.Date;

import com.spring.projekateo.model.Payment;

public class PaymentDTO implements Serializable{
	
	private Integer id;
	private Date date;
	private double amount;
	private String purpose;
	private AccountDTO account;
	
	public PaymentDTO() {
		super();
	}
	
	public PaymentDTO(Integer id, Date date, double amount, String purpose, AccountDTO account) {
		super();
		this.id = id;
		this.date = date;
		this.amount = amount;
		this.purpose = purpose;
		this.account = account;
	}

	
	public PaymentDTO(Payment payment) {
		this(payment.getId(), payment.getDate(), payment.getAmount(), payment.getPurpose(), new AccountDTO(payment.getAccount()));
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	public AccountDTO getAccount() {
		return account;
	}

	public void setAccount(AccountDTO account) {
		this.account = account;
	}

}
