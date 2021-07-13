package com.spring.projekateo.model;

import java.util.Date;
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
@Table(name = "exam_part")
public class ExamPart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="exam_part_id",unique = true, nullable = false)
	private Integer id;
	 
	@Column(name = "points")
	private double points;
	 
	@Column(name = "date", nullable = false)
	private Date date;

	@Column(name = "location", nullable = false)
	private String location;
	
	@ManyToOne
	@JoinColumn(name = "type_id", referencedColumnName = "exam_part_type_id", nullable = false)
	private ExamPartType type;
	
	@ManyToOne
	@JoinColumn(name = "exam_period_id", referencedColumnName = "exam_period_id", nullable = false)
	private ExamPeriod period;
	
	@ManyToOne
	@JoinColumn(name = "course_id", referencedColumnName = "course_id", nullable = false)
	private Course course;

	@OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY, mappedBy = "part")
	private Set<ExamPartTaking> takings = new HashSet<ExamPartTaking>();
	
	@Column(name = "active", nullable = false)
	private boolean active = true;
	
	public ExamPart() {

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

	public ExamPartType getType() {
		return type;
	}

	public void setType(ExamPartType type) {
		this.type = type;
	}

	public ExamPeriod getPeriod() {
		return period;
	}

	public void setPeriod(ExamPeriod period) {
		this.period = period;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public Set<ExamPartTaking> getTakings() {
		return takings;
	}

	public void setTakings(Set<ExamPartTaking> takings) {
		this.takings = takings;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

}
