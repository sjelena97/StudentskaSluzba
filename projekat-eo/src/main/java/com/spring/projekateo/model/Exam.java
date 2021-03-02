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
@Table(name = "exam")
public class Exam {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="exam_id",unique = true, nullable = false)
	private Integer id;
	
	 @Column(name = "date", nullable = false)
	 private  Date date;
	 
	 @Column(name = "points", nullable = false)
	 private int points;
	 
	 @Column(name = "grade", nullable = false)
	 private int grade;
	 
	 @ManyToOne
	 @JoinColumn(name = "student_id", referencedColumnName = "student_id", nullable = false)
	 private Student student;
	 
	 @ManyToOne
	 @JoinColumn(name = "course_id", referencedColumnName = "course_id", nullable = false)
	 private Course course;
	 
	 
	 //pitati kako za time ispita

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
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

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

}
