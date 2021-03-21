package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.repository.EnrollmentRepository;
import com.spring.projekateo.service.EnrollmentService;

public class EnrollmentServiceImpl implements EnrollmentService{
	
	@Autowired
    EnrollmentRepository enrollmentRepository;
	
	@Override
    public List<Enrollment> getAllEnrollmentsByStudent(Student student){
		List<Enrollment> allEnrollments = enrollmentRepository.findAllByStudent(student);
        return allEnrollments;
	}

}
