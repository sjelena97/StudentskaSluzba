package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Authority;

public class AuthorityDTO implements Serializable{
	
	private Integer id;
	private String name;
	
	public AuthorityDTO() {
		super();
	}
	
	public AuthorityDTO(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	
	public AuthorityDTO(Authority authority) {
		this(authority.getId(), authority.getName());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
