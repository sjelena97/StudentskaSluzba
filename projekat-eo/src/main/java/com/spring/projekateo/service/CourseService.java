package com.spring.projekateo.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.spring.projekateo.model.Course;

public interface CourseService {

	Course findById(Integer id);

	Course save(Course course);

	List<Course> getAllCourses();
	
	Course findCourseByCode(String code);

	Page<Course> findAll(Pageable paging);

	Page<Course> findByNameContaining(String name, Pageable paging);

}
