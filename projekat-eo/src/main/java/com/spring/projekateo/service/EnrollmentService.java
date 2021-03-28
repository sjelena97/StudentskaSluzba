package com.spring.projekateo.service;

import java.util.Set;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;

public interface EnrollmentService {

	Set<Enrollment> getAllEnrollmentsByStudent(Student student);

	Set<Enrollment> getAllEnrollmentsByCourse(Course course);

	Enrollment save(Enrollment enrollment);

	void remove(Enrollment enrollment);

	Enrollment findById(Integer id);

}
