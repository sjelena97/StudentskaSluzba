package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.User;

public interface TeacherService {

	Teacher findById(Integer id);

	Teacher save(Teacher teacher);

	List<Teacher> getAllTeachers();

	Teacher findByUser(User user);

}
