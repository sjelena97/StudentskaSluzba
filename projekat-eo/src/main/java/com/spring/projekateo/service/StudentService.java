package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;

public interface StudentService {

	Student findById(Integer id);

	Student save(Student student);

	List<Student> getAllStudents();

	Student findByCardName(String cardName);

	Student findByUser(User user);

}
