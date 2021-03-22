package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;

public interface TeacherService {

	Teacher findById(Integer id);

	Teacher save(Teacher teacher);

	Teacher add(Teacher newTeacher);

	List<Teacher> getAllTeachersByTeaching(Teaching teaching);

	List<Teacher> getAllTeachers();

}
