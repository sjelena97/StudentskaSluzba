package com.spring.projekateo.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.repository.CourseRepository;
import com.spring.projekateo.service.CourseService;

public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseRepository courseRepository;
		
	@Override
	public Course findById(Integer id) {
		return courseRepository.findById(id);
	}
	
	@Override
	public Course save(Course course) {
		return courseRepository.save(course);
	}
	
	//ovdje treba courseDTO, a ne Course
	@Override
	public Course add(Course newCourse) {
		Course c = new Course();
		c.setCode(newCourse.getCode());
		c.setName(newCourse.getName());
		c.setESPB(newCourse.getESPB());
		c.setEnrollments(newCourse.getEnrollments());
		c.setTeachings(newCourse.getTeachings());
		
		c = this.courseRepository.save(c);
		return c;
	}
	
	@Override
    public List<Course> getAllCourses(){
		List<Course> allCourses= courseRepository.findAll();
        return allCourses;
	}

}
