package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Teacher;

public class TeacherDTO implements Serializable {
	
	private Integer id;
	private UserDTO user;
	private boolean active;
	
	public TeacherDTO() {
		super();
	}

	public TeacherDTO(Integer id, UserDTO user, boolean active) {
		super();
		this.id = id;
		this.user = user;
		this.active = active;
	}
	
	public TeacherDTO(Teacher teacher) {
		this(teacher.getId(),new UserDTO(teacher.getUser()),teacher.isActive()) ;
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

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	
	

	
	
}
