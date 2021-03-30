package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Exam;

public class ExamDTO implements Serializable {
	
	private Integer id;
	 
	private Integer points;
	 
	private Integer grade;
	 
	private EnrollmentDTO enrollment;
	 
	private ExamPeriodDTO period;

	public ExamDTO() {
		super();
	}

	public ExamDTO(Integer id, Integer points, Integer grade, EnrollmentDTO enrollment, ExamPeriodDTO period) {
		super();
		this.id = id;
		this.points = points;
		this.grade = grade;
		this.enrollment = enrollment;
		this.period = period;
	}
	
	public ExamDTO(Exam exam) {
		this(exam.getId(),exam.getPoints(),exam.getGrade(),new EnrollmentDTO(exam.getEnrollment()), new ExamPeriodDTO(exam.getPeriod()));
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

	public ExamPeriodDTO getPeriod() {
		return period;
	}

	public void setPeriod(ExamPeriodDTO period) {
		this.period = period;
	}

}
