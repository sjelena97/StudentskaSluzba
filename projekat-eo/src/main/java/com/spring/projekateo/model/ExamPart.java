package com.spring.projekateo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "exam_part")
public class ExamPart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="exam_part_id",unique = true, nullable = false)
	private Integer id;
	 
	@Column(name = "points", nullable = false)
	private int points;
	 
	@Column(name = "date", nullable = false)
	private Date date;

	@Column(name = "location", nullable = false)
	private String location;
	
	@ManyToOne
	@JoinColumn(name = "exam_id", referencedColumnName = "exam_id", nullable = false)
	private Exam exam;
	
	@ManyToOne
	@JoinColumn(name = "type_id", referencedColumnName = "exam_part_type_id", nullable = false)
	private ExamPartType type;
	
	@ManyToOne
	@JoinColumn(name = "status_id", referencedColumnName = "exam_part_status_id", nullable = false)
	private ExamPartStatus status;
	
	public ExamPart() {

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

	public Exam getExam() {
		return exam;
	}

	public void setExam(Exam exam) {
		this.exam = exam;
	}

	public ExamPartType getType() {
		return type;
	}

	public void setType(ExamPartType type) {
		this.type = type;
	}

	public ExamPartStatus getStatus() {
		return status;
	}

	public void setStatus(ExamPartStatus status) {
		this.status = status;
	}
	
}
