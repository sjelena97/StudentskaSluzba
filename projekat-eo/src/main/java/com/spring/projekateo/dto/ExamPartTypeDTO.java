package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.ExamPartType;

public class ExamPartTypeDTO implements Serializable{
	
	private Integer id;
	private String name;
	private String code;
	
	public ExamPartTypeDTO() {
		super();
	}

	public ExamPartTypeDTO(Integer id, String name, String code) {
		super();
		this.id = id;
		this.name = name;
		this.code = code;
	}

	public ExamPartTypeDTO(ExamPartType type) {
		this(type.getId(), type.getName(), type.getCode());
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
