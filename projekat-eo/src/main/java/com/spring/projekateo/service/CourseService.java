package com.spring.projekateo.service;

import com.spring.projekateo.model.Course;

public interface CourseService {

	Course findById(Integer id);

	Course save(Course course);

	Course add(Course newCourse);

}
