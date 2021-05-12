package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;

public interface StudentRepository extends JpaRepository<Student, Long>{
	
	Student findById(Integer id);
	Student findByCardName(String cardName);
	Student findByUser(User user);

}
