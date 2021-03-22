package com.spring.projekateo.service;

import com.spring.projekateo.model.Student;

public interface StudentService {

	Student findById(Integer id);

	Student save(Student student);

}
