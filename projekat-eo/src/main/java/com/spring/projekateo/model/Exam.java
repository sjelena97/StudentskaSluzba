package com.spring.projekateo.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "exam")
public class Exam {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="exam_id",unique = true, nullable = false)
	private Integer id;
	 
	 @Column(name = "points", nullable = false)
	 private int points;
	 
	 @Column(name = "grade", nullable = false)
	 private int grade;
	 
	 @ManyToOne
	 @JoinColumn(name = "enrollment_id", referencedColumnName = "enrollment_id")
	 private Enrollment enrollment;
	 
	 @ManyToOne
	 @JoinColumn(name = "exam_period_id", referencedColumnName = "exam_period_id", nullable = false)
	 private ExamPeriod period;
	 
	 @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY, mappedBy = "exam")
	 private Set<ExamPart> parts = new HashSet<ExamPart>();
	 
	public Exam() {
			
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

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public Enrollment getEnrollment() {
		return enrollment;
	}

	public void setEnrollment(Enrollment enrollment) {
		this.enrollment = enrollment;
	}

	public ExamPeriod getPeriod() {
		return period;
	}

	public void setPeriod(ExamPeriod period) {
		this.period = period;
	}

	public ExamPeriod getExamPeriod() {
		return period;
	}

	public void setExamPeriod(ExamPeriod period) {
		this.period = period;
	}

	public Set<ExamPart> getParts() {
		return parts;
	}

	public void setParts(Set<ExamPart> parts) {
		this.parts = parts;
	}
	
}
