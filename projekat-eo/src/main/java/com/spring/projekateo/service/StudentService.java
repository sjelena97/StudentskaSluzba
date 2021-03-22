package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Student;

public interface StudentService {

	Student findById(Integer id);

	Student save(Student student);

	Student add(Student newStudent);

	List<Student> getAllStudents();

}
