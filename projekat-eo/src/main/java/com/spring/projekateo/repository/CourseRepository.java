package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{

	Course findById(Integer id);

	Course findByCode(String code);

}
