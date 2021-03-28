package com.spring.projekateo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long>{

	Set<Enrollment> findAllByStudent(Student student);

	Set<Enrollment> findAllByCourse(Course course);

	Enrollment findById(Integer id);

}
