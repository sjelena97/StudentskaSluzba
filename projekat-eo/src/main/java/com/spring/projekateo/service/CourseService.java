package com.spring.projekateo.service;

import java.util.List;
import java.util.Set;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Student;

public interface CourseService {

	Course findById(Integer id);

	Course save(Course course);

	List<Course> getAllCourses();

	Course findCourseByCode(String code);
}
