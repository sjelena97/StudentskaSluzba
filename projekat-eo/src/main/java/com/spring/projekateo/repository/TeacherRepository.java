package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.User;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

	Teacher findById(Integer id);

	Teacher findByUser(User user);

}
