package com.spring.projekateo.dto;

import java.io.Serializable;
import com.spring.projekateo.model.Student;

public class StudentDTO implements Serializable{
	
	private Integer id;
	private String cardName;
	private AccountDTO account;
	private UserDTO user;
	
	public StudentDTO() {
		super();
	}

	public StudentDTO(Integer id, String cardName, AccountDTO account, UserDTO user) {
		super();
		this.id = id;
		this.cardName = cardName;
		this.account = account;
		this.user = user;
	}
	
	
	public StudentDTO(Student student){
		this(student.getId(), student.getCardName(), new AccountDTO(student.getAccount()), new UserDTO(student.getUser()));
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCardName() {
		return cardName;
	}

	public void setCardName(String cardName) {
		this.cardName = cardName;
	}

	public AccountDTO getAccount() {
		return account;
	}

	public void setAccount(AccountDTO account) {
		this.account = account;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

}
