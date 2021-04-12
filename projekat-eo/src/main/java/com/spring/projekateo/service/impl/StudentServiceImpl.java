package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Student;
import com.spring.projekateo.repository.StudentRepository;
import com.spring.projekateo.service.StudentService;

@Service
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
	
	@Override
    public List<Student> getAllStudents(){
		List<Student> allStudents= studentRepository.findAll();
        return allStudents;
	}

	@Override
	public Student findByCardName(String cardName) {
		Student s = studentRepository.findByCardName(cardName);
		return s;
	}
	
}
