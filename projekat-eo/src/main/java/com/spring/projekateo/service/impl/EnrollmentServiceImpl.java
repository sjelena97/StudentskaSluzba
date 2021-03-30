package com.spring.projekateo.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.repository.EnrollmentRepository;
import com.spring.projekateo.service.EnrollmentService;

@Service
public class EnrollmentServiceImpl implements EnrollmentService{
	
	@Autowired
    EnrollmentRepository enrollmentRepository;
	
	@Override
	public Enrollment findById(Integer id) {
		return enrollmentRepository.findById(id);
	}
	
	@Override
    public Set<Enrollment> getAllEnrollmentsByStudent(Student student){
		Set<Enrollment> allEnrollments = enrollmentRepository.findAllByStudent(student);
        return allEnrollments;
	}
	
	@Override
    public Set<Enrollment> getAllEnrollmentsByCourse(Course course){
		Set<Enrollment> allEnrollments = enrollmentRepository.findAllByCourse(course);
        return allEnrollments;
	}
	
	@Override
	public Enrollment save(Enrollment enrollment) {
		return enrollmentRepository.save(enrollment);
	}
	
	@Override
	public void remove(Enrollment enrollment)  {
		enrollmentRepository.delete(enrollment);
	}
	
	

}
