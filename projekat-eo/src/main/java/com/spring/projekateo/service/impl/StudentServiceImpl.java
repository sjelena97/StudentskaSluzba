package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;
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
	public Student findByUser(User user) {
		return studentRepository.findByUser(user);
	}
	
	@Override
	public Student save(Student student) {
		return studentRepository.save(student);
	}
	
	@Override
    public Page<Student> getAllStudents(Pageable page){
        return studentRepository.getAll(page);
	}

	@Override
	public Student findByCardName(String cardName) {
		Student s = studentRepository.findByCardName(cardName);
		return s;
	}

	@Override
	public Page<Student> findByNameContaining(String search, Pageable paging) {
		// TODO Auto-generated method stub
		return studentRepository.getAllByNameOrCardNameOrUserName(search,paging);
	}

	@Override
	public List<Student> getAllStudentsList() {
		List<Student> allStudents= studentRepository.findAll();
        return allStudents;
    }
	
}
