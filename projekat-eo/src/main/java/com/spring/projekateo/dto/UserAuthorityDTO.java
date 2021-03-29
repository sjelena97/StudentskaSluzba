package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.User;
import com.spring.projekateo.model.UserAuthority;

public class UserAuthorityDTO implements Serializable {
	
	private Integer id;
	private UserDTO user;
	private AuthorityDTO authority;
	
	
	public UserAuthorityDTO() {
		super();
	}


	public UserAuthorityDTO(Integer id, UserDTO user, AuthorityDTO authority) {
		super();
		this.id = id;
		this.user = user;
		this.authority = authority;
	}



	public UserAuthorityDTO(UserAuthority userAuthority) {
		this(userAuthority.getId(), new UserDTO(userAuthority.getUser()), new AuthorityDTO(userAuthority.getAuthority()));
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public UserDTO getUser() {
		return user;
	}


	public void setUser(UserDTO user) {
		this.user = user;
	}


	public AuthorityDTO getAuthority() {
		return authority;
	}


	public void setAuthority(AuthorityDTO authority) {
		this.authority = authority;
	}


	
	

}
