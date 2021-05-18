package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.User;
import com.spring.projekateo.repository.TeacherRepository;
import com.spring.projekateo.service.TeacherService;

@Service
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	private TeacherRepository teacherRepository;
	
	@Override
	public Teacher findById(Integer id) {
		return teacherRepository.findById(id);
	}
	
	@Override
	public Teacher findByUser(User user) {
		return teacherRepository.findByUser(user);
	}
	
	@Override
	public Teacher save(Teacher teacher) {
		return teacherRepository.save(teacher);
	}
	
	@Override
    public List<Teacher> getAllTeachers(){
		List<Teacher> allTeachers= teacherRepository.findAll();
        return allTeachers;
	}
	
}
