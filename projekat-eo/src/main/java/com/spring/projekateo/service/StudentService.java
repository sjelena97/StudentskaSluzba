package com.spring.projekateo.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;

public interface StudentService {

	Student findById(Integer id);

	Student save(Student student);

	Page<Student> getAllStudents(Pageable page);
	
	List<Student> getAllStudentsList();


	Student findByCardName(String cardName);

	Student findByUser(User user);

	Page<Student> findByNameContaining(String search, Pageable paging);

}
