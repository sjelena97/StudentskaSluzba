package com.spring.projekateo.dto;

import java.io.Serializable;
import java.util.Date;

import com.spring.projekateo.model.ExamPart;

public class ExamPartDTO implements Serializable{
	
	private Integer id;
	private int points;
	private Date date;
	private String location;
	private ExamDTO exam;
	private ExamPartTypeDTO type;
	private ExamPartStatusDTO status;
	
	public ExamPartDTO() {
		super();
	}

	public ExamPartDTO(Integer id, int points, Date date, String location, ExamDTO exam, ExamPartTypeDTO type, ExamPartStatusDTO status) {
		super();
		this.id = id;
		this.points = points;
		this.date = date;
		this.location = location;
		this.exam = exam;
		this.type = type;
		this.status = status;
	}
	
	
	public ExamPartDTO(ExamPart examPart){
		this(examPart.getId(), examPart.getPoints(), examPart.getDate(), examPart.getLocation(), new ExamDTO(examPart.getExam()), new ExamPartTypeDTO(examPart.getType()), new ExamPartStatusDTO(examPart.getStatus()));
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public ExamDTO getExam() {
		return exam;
	}

	public void setExam(ExamDTO exam) {
		this.exam = exam;
	}

	public ExamPartTypeDTO getType() {
		return type;
	}

	public void setType(ExamPartTypeDTO type) {
		this.type = type;
	}

	public ExamPartStatusDTO getStatus() {
		return status;
	}

	public void setStatus(ExamPartStatusDTO status) {
		this.status = status;
	}

}
