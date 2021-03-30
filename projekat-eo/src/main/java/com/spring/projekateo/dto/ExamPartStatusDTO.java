package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.ExamPartStatus;

public class ExamPartStatusDTO implements Serializable{
	
	private Integer id;
	private String name;
	private String code;
	
	public ExamPartStatusDTO() {
		super();
	}

	public ExamPartStatusDTO(Integer id, String name, String code) {
		super();
		this.id = id;
		this.name = name;
		this.code = code;
	}

	public ExamPartStatusDTO(ExamPartStatus status) {
		this(status.getId(), status.getName(), status.getCode());
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

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
