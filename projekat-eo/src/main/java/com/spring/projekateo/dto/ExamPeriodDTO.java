package com.spring.projekateo.dto;

import java.io.Serializable;
import java.util.Date;


import com.spring.projekateo.model.ExamPeriod;

public class ExamPeriodDTO implements Serializable {

	private Integer id;
	
	private String name;
	
	private Date startDate;
	
	private Date endDate;
	
	private boolean active;


	public ExamPeriodDTO() {
		super();
	}

	public ExamPeriodDTO(Integer id, String name, Date startDate, Date endDate, boolean active) {
		super();
		this.id = id;
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.active = active;
	}
	
	public ExamPeriodDTO(ExamPeriod examPeriod) {
		this(examPeriod.getId(), examPeriod.getName(),examPeriod.getStartDate(),examPeriod.getEndDate(),examPeriod.isActive()); 
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

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
	
	
}
