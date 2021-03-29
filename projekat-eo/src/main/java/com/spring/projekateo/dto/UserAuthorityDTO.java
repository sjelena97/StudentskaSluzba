package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.User;
import com.spring.projekateo.model.UserAuthority;

public class UserAuthorityDTO implements Serializable {
	
	private Integer id;
	private User user;
	
	
	public UserAuthorityDTO() {
		super();
	}


	public UserAuthorityDTO(Integer id, User user) {
		super();
		this.id = id;
		this.user = user;
	}
	
	public UserAuthorityDTO(UserAuthority userAuthority) {
		this(userAuthority.getId(), userAuthority.getUser());
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}
	
	
	

}
