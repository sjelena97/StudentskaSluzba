package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Course;

public interface CourseService {

	Course findById(Integer id);

	Course save(Course course);

	List<Course> getAllCourses();

	Course findCourseByCode(String code);
}
