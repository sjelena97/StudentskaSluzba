package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;

public interface TeachingRepository extends JpaRepository<Teaching, Long> {

	List<Teaching> findAllByTeacher(Teacher teacher);

	List<Teaching> findAllByCourse(Course course);

	Teaching findById(Integer id);

}
