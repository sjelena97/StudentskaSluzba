package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Teacher;

public interface TeacherService {

	Teacher findById(Integer id);

	Teacher save(Teacher teacher);

	Teacher add(Teacher newTeacher);

	List<Teacher> getAllTeachers();

}
