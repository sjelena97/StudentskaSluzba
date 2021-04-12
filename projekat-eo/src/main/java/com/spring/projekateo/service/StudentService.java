package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Student;

public interface StudentService {

	Student findById(Integer id);

	Student save(Student student);

	List<Student> getAllStudents();

	Student findByCardName(String cardName);

}
