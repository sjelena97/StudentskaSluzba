package com.spring.projekateo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "exam_part_taking")
public class ExamPartTaking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="exam_part_taking_id",unique = true, nullable = false)
	private Integer id;

	@Column(name = "score")
	private double score;
	
	@ManyToOne
	@JoinColumn(name = "status_id", referencedColumnName = "exam_part_status_id")
	private ExamPartStatus status;
	
	@ManyToOne
	@JoinColumn(name = "exam_part_id", referencedColumnName = "exam_part_id")
	private ExamPart part;
	
	@ManyToOne
	@JoinColumn(name = "enrollment_id", referencedColumnName = "enrollment_id")
	private Enrollment enrollment;
	
	public ExamPartTaking() {
		
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

	public ExamPartStatus getStatus() {
		return status;
	}

	public void setStatus(ExamPartStatus status) {
		this.status = status;
	}

	public ExamPart getPart() {
		return part;
	}

	public void setPart(ExamPart part) {
		this.part = part;
	}

	public Enrollment getEnrollment() {
		return enrollment;
	}

	public void setEnrollment(Enrollment enrollment) {
		this.enrollment = enrollment;
	}

}
