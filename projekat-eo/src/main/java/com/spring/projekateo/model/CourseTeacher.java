package com.spring.projekateo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "course_teacher")
public class CourseTeacher {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="course_teacher_id",unique = true, nullable = false)
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "course_id", referencedColumnName = "course_id", nullable = false)
	private Course course;
	
	@ManyToOne
	@JoinColumn(name = "teacher_id", referencedColumnName = "teacher_id", nullable = false)
	private Teacher teacher;

	@Enumerated
	@Column(name = "teacher_role", nullable = false)
	private Role teacherRole;
	
	public CourseTeacher() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public Role getTeacherRole() {
		return teacherRole;
	}

	public void setTeacherRole(Role teacherRole) {
		this.teacherRole = teacherRole;
	} 
	
}
