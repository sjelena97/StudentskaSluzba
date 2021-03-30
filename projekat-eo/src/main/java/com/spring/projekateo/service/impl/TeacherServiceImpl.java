package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Teacher;
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
	public Teacher save(Teacher teacher) {
		return teacherRepository.save(teacher);
	}

	//ovdje umjesto teacher bice teacherDTO
	@Override
	public Teacher add(Teacher newTeacher) {
		Teacher t = new Teacher();
		t.setUser(newTeacher.getUser());
		t.setTeachings(newTeacher.getTeachings());
		
		t = this.teacherRepository.save(t);
		return t;
	}
	
	@Override
    public List<Teacher> getAllTeachers(){
		List<Teacher> allTeachers= teacherRepository.findAll();
        return allTeachers;
	}
	
}
