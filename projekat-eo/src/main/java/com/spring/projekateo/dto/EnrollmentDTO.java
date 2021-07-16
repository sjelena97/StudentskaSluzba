package com.spring.projekateo.dto;

import java.io.Serializable;
import java.util.Date;

import com.spring.projekateo.model.Enrollment;

public class EnrollmentDTO implements Serializable{
	
	private Integer id;
	private Date startDate;
	private Date endDate;
	private int grade;
	private StudentDTO student;
	private CourseDTO course;
	private boolean active;
	
	public EnrollmentDTO() {
		super();
	}

	public EnrollmentDTO(Integer id, Date startDate, Date endDate, int grade, StudentDTO student, CourseDTO course, boolean active) {
		super();
		this.id = id;
		this.startDate = startDate;
		this.endDate = endDate;
		this.grade = grade;
		this.student = student;
		this.course = course;
		this.active = active;
	}
	
	
	public EnrollmentDTO(Enrollment enrollment){
		this(enrollment.getId(), enrollment.getStartDate(), enrollment.getEndDate(), enrollment.getGrade(), new StudentDTO(enrollment.getStudent()), new CourseDTO(enrollment.getCourse()), enrollment.isActive());
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

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public StudentDTO getStudent() {
		return student;
	}

	public void setStudent(StudentDTO student) {
		this.student = student;
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
