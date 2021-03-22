package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;

public interface EnrollmentService {

	List<Enrollment> getAllEnrollmentsByStudent(Student student);

	List<Enrollment> getAllEnrollmentsByCourse(Course course);

	Enrollment save(Enrollment enrollment);

	void remove(Enrollment enrollment);

}
