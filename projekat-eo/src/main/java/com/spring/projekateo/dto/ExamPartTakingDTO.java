package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.ExamPartTaking;

public class ExamPartTakingDTO implements Serializable{
	
	private Integer id;
	private double score;
	private ExamPartStatusDTO status;
	private ExamPartDTO part;
	private EnrollmentDTO enrollment;
	
	public ExamPartTakingDTO() {
		super();
	}

	public ExamPartTakingDTO(Integer id, double score, ExamPartStatusDTO status, ExamPartDTO part,
			EnrollmentDTO enrollment) {
		super();
		this.id = id;
		this.score = score;
		this.status = status;
		this.part = part;
		this.enrollment = enrollment;
	}
	
	public ExamPartTakingDTO(ExamPartTaking examPartTaking){
		this(examPartTaking.getId(), examPartTaking.getScore(), new ExamPartStatusDTO(examPartTaking.getStatus()), new ExamPartDTO(examPartTaking.getPart()), new EnrollmentDTO(examPartTaking.getEnrollment()));
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	public ExamPartStatusDTO getStatus() {
		return status;
	}

	public void setStatus(ExamPartStatusDTO status) {
		this.status = status;
	}

	public ExamPartDTO getPart() {
		return part;
	}

	public void setPart(ExamPartDTO part) {
		this.part = part;
	}

	public EnrollmentDTO getEnrollment() {
		return enrollment;
	}

	public void setEnrollment(EnrollmentDTO enrollment) {
		this.enrollment = enrollment;
	}
	
}
