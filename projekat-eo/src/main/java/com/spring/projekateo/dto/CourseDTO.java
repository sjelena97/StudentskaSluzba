package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Course;

public class CourseDTO implements Serializable{
	
	private Integer id;
	private String code;
	private String name;
	private int ESPB;
	private boolean active;

	
	public CourseDTO() {
		super();
	}

	public CourseDTO(Integer id, String code, String name, int ESPB, boolean active) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
		this.ESPB = ESPB;
		this.active = active;
	}
	
	
	public CourseDTO(Course course){
		this(course.getId(), course.getCode(), course.getName(), course.getESPB(),course.isActive());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getESPB() {
		return ESPB;
	}

	public void setESPB(int eSPB) {
		ESPB = eSPB;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	

}
