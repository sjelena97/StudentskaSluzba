package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;

public interface TeachingService {

	List<Teaching> getAllTeachingsByTeacher(Teacher teacher);

	List<Teaching> getAllTeachingsByCourse(Course course);

	Teaching add(Teaching newTeaching);

	Teaching save(Teaching teaching);

	void remove(Teaching teaching);

	Teaching findById(Integer id);

}
