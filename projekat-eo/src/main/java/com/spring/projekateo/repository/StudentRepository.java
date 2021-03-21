package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
	
	Student findById(Integer id);

}
