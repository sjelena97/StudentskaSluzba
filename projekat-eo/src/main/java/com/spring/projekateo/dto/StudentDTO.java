package com.spring.projekateo.dto;

import java.io.Serializable;
import com.spring.projekateo.model.Student;

public class StudentDTO implements Serializable{
	
	private Integer id;
	private String cardName;
	private AccountDTO account;
	private UserDTO user;
	private boolean active;
	
	public StudentDTO() {
		super();
	}

	public StudentDTO(Integer id, String cardName, AccountDTO account, UserDTO user, boolean active) {
		super();
		this.id = id;
		this.cardName = cardName;
		this.account = account;
		this.user = user;
		this.active = active;
	}
	
	
	public StudentDTO(Student student){
		this(student.getId(), student.getCardName(), new AccountDTO(student.getAccount()), new UserDTO(student.getUser()), student.isActive());
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

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	

}
