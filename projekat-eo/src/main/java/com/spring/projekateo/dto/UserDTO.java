package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.User;

public class UserDTO implements Serializable{
	
	private Integer id;
	private String firstName;
	private String lastName;
	private String username;
	private String password;
	private boolean active;
	
	public UserDTO() {
		super();
	}

	public UserDTO(Integer id, String firstName, String lastName,
			String username, String password, boolean active) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.active = active;
	}
	
	
	public UserDTO(User user){
		this(user.getId(), user.getFirstName(), 
				user.getLastName(), user.getUsername(), user.getPassword(), user.isActive());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

}
