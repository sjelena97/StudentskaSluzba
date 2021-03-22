package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.repository.TeacherRepository;
import com.spring.projekateo.service.TeacherService;

public class TeacherServiceImpl implements TeacherService {

	@Autowired
	private TeacherRepository teacherRepository;
	
	@Override
	public Teacher findById(Integer id) {
		return teacherRepository.findById(id);
	}
	
	@Override
	public Teacher save(Teacher teacher) {
		return teacherRepository.save(teacher);
	}

	
}
