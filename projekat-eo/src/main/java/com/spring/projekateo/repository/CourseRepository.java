package com.spring.projekateo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Student;

public interface CourseRepository extends JpaRepository<Course, Long>{

	Course findById(Integer id);

	Course findByCode(String code);

}
