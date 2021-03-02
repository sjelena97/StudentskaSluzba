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
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "course")
public class Course {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="course_id",unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "code", unique = true, nullable = false)
	private String courseCode;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "ESPB", nullable = false)
	private int ESPB;
	
	@OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY, mappedBy = "course")
	private Set<Exam> exams = new HashSet<Exam>();
	
	@OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY, mappedBy = "course")
	private Set<CourseTeacher> courseTeacher = new HashSet<CourseTeacher>();

	public Course() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCourseCode() {
		return courseCode;
	}

	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getESPB() {
		return ESPB;
	}

	public void setESPB(int eSPB) {
		ESPB = eSPB;
	}

	public Set<Exam> getExams() {
		return exams;
	}

	public void setExams(Set<Exam> exams) {
		this.exams = exams;
	}

	public Set<CourseTeacher> getCourseTeacher() {
		return courseTeacher;
	}

	public void setCourseTeacher(Set<CourseTeacher> courseTeacher) {
		this.courseTeacher = courseTeacher;
	}
	
	

}
