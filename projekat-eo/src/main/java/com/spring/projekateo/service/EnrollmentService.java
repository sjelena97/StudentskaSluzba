package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;

public interface EnrollmentService {

	List<Enrollment> getAllEnrollmentsByStudent(Student student);

}
