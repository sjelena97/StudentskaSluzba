package com.spring.projekateo.dto;

import java.io.Serializable;
import java.util.Date;

import com.spring.projekateo.model.Teaching;



public class TeachingDTO implements Serializable {

	private Integer id;
	
	private Date startDate;
	
	private Date endDate;
	
	private TeacherDTO teacher;
	
	private CourseDTO course;
	
	private TeachingTypeDTO type;

	public TeachingDTO() {
		super();
	}

	public TeachingDTO(Integer id, Date startDate, Date endDate, TeacherDTO teacher, CourseDTO course,
			TeachingTypeDTO type) {
		super();
		this.id = id;
		this.startDate = startDate;
		this.endDate = endDate;
		this.teacher = teacher;
		this.course = course;
		this.type = type;
	}
	
	public TeachingDTO(Teaching teaching) {
		this(teaching.getId(),teaching.getStartDate(),teaching.getEndDate(),new TeacherDTO(teaching.getTeacher()),new CourseDTO(teaching.getCourse()),new TeachingTypeDTO(teaching.getType()));
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public TeacherDTO getTeacher() {
		return teacher;
	}

	public void setTeacher(TeacherDTO teacher) {
		this.teacher = teacher;
	}

	public CourseDTO getCourse() {
		return course;
	}

	public void setCourse(CourseDTO course) {
		this.course = course;
	}

	public TeachingTypeDTO getType() {
		return type;
	}

	public void setType(TeachingTypeDTO type) {
		this.type = type;
	}
	
	
}
