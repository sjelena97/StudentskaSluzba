package com.spring.projekateo.service;

import java.util.Set;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;

public interface TeachingService {

	Set<Teaching> getAllTeachingsByTeacher(Teacher teacher);

	Set<Teaching> getAllTeachingsByCourse(Course course);

	Teaching add(Teaching newTeaching);

	Teaching save(Teaching teaching);

	void remove(Teaching teaching);

	Teaching findById(Integer id);

}
