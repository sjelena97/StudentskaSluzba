package com.spring.projekateo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;

public interface TeachingRepository extends JpaRepository<Teaching, Long> {

	Set<Teaching> findAllByTeacher(Teacher teacher);

	Set<Teaching> findAllByCourse(Course course);

	Teaching findById(Integer id);

}
