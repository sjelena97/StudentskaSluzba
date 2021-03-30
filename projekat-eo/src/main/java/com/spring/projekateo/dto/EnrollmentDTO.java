package com.spring.projekateo.dto;

import java.io.Serializable;
import java.util.Date;

import com.spring.projekateo.model.Enrollment;

public class EnrollmentDTO implements Serializable{
	
	private Integer id;
	private Date startDate;
	private Date endDate;
	private StudentDTO student;
	private CourseDTO course;
	
	public EnrollmentDTO() {
		super();
	}

	public EnrollmentDTO(Integer id, Date startDate, Date endDate, StudentDTO student, CourseDTO course) {
		super();
		this.id = id;
		this.startDate = startDate;
		this.endDate = endDate;
		this.student = student;
		this.course = course;
	}
	
	
	public EnrollmentDTO(Enrollment enrollment){
		this(enrollment.getId(), enrollment.getStartDate(), enrollment.getEndDate(), new StudentDTO(enrollment.getStudent()), new CourseDTO(enrollment.getCourse()));
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

}
