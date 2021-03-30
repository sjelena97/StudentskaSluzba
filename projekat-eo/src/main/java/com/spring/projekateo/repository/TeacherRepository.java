package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

	Teacher findById(Integer id);

}
