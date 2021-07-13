package com.spring.projekateo.dto;

import java.io.Serializable;
import java.util.Date;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.ExamPart;

public class ExamPartDTO implements Serializable{
	
	private Integer id;
	private double points;
	private Date date;
	private String location;
	private ExamPeriodDTO period;
	private ExamPartTypeDTO type;
	private CourseDTO course;
	private boolean active;
	
	public ExamPartDTO() {
		super();
	}

	public ExamPartDTO(Integer id, double points, Date date, String location, ExamPeriodDTO period, ExamPartTypeDTO type, CourseDTO course, boolean active) {
		super();
		this.id = id;
		this.points = points;
		this.date = date;
		this.location = location;
		this.period = period;
		this.type = type;
		this.course = course;
		this.active = active;
	}
	
	
	public ExamPartDTO(ExamPart examPart){
		this(examPart.getId(), examPart.getPoints(), examPart.getDate(), examPart.getLocation(), new ExamPeriodDTO(examPart.getPeriod()), new ExamPartTypeDTO(examPart.getType()), new CourseDTO(examPart.getCourse()), examPart.isActive());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public double getPoints() {
		return points;
	}

	public void setPoints(double points) {
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

	public ExamPeriodDTO getPeriod() {
		return period;
	}

	public void setPeriod(ExamPeriodDTO period) {
		this.period = period;
	}

	public ExamPartTypeDTO getType() {
		return type;
	}

	public void setType(ExamPartTypeDTO type) {
		this.type = type;
	}

	public CourseDTO getCourse() {
		return course;
	}

	public void setCourse(CourseDTO course) {
		this.course = course;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}
	
}
