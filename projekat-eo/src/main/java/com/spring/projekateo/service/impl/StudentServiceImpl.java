package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Student;
import com.spring.projekateo.repository.StudentRepository;
import com.spring.projekateo.service.StudentService;

public class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Override
	public Student findById(Integer id) {
		return studentRepository.findById(id);
	}
	
	@Override
	public Student save(Student student) {
		return studentRepository.save(student);
	}
	
	//ovdje treba studentDTO a ne student
	@Override
	public Student add(Student newStudent) {
		Student s = new Student();
		s.setCardName(newStudent.getCardName());
		s.setUser(newStudent.getUser());
		s.setAccount(newStudent.getAccount());
		s.setDocuments(newStudent.getDocuments());
		s.setEnrollments(newStudent.getEnrollments());
		
		s = this.studentRepository.save(s);
		return s;
	}
	
}
