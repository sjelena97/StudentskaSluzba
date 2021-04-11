package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Exam;

public class ExamDTO implements Serializable {
	
	private Integer id;
	 
	private Integer points;
	 
	private Integer grade;
	 
	private EnrollmentDTO enrollment;
	
	private TeachingDTO teaching;
	
	private CourseDTO course;
	 
	private ExamPeriodDTO period;

	public ExamDTO() {
		super();
	}

	public ExamDTO(Integer id, Integer points, Integer grade, EnrollmentDTO enrollment, TeachingDTO teaching, CourseDTO course, ExamPeriodDTO period) {
		super();
		this.id = id;
		this.points = points;
		this.grade = grade;
		this.enrollment = enrollment;
		this.teaching = teaching;
		this.course = course;
		this.period = period;
	}
	
	public ExamDTO(Exam exam) {
		this(exam.getId(),exam.getPoints(),exam.getGrade(), new EnrollmentDTO(exam.getEnrollment()), new TeachingDTO(exam.getTeaching()), new CourseDTO(exam.getCourse()), new ExamPeriodDTO(exam.getPeriod()));
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getPoints() {
		return points;
	}

	public void setPoints(Integer points) {
		this.points = points;
	}

	public Integer getGrade() {
		return grade;
	}

	public void setGrade(Integer grade) {
		this.grade = grade;
	}

	public EnrollmentDTO getEnrollment() {
		return enrollment;
	}

	public void setEnrollment(EnrollmentDTO enrollment) {
		this.enrollment = enrollment;
	}

	public TeachingDTO getTeaching() {
		return teaching;
	}

	public void setTeaching(TeachingDTO teaching) {
		this.teaching = teaching;
	}

	public CourseDTO getCourse() {
		return course;
	}

	public void setCourse(CourseDTO course) {
		this.course = course;
	}

	public ExamPeriodDTO getPeriod() {
		return period;
	}

	public void setPeriod(ExamPeriodDTO period) {
		this.period = period;
	}

}
