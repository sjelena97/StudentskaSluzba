package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.repository.EnrollmentRepository;
import com.spring.projekateo.service.EnrollmentService;

public class EnrollmentServiceImpl implements EnrollmentService{
	
	@Autowired
    EnrollmentRepository enrollmentRepository;
	
	@Override
	public Enrollment findById(Integer id) {
		return enrollmentRepository.findById(id);
	}
	
	@Override
    public List<Enrollment> getAllEnrollmentsByStudent(Student student){
		List<Enrollment> allEnrollments = enrollmentRepository.findAllByStudent(student);
        return allEnrollments;
	}
	
	@Override
    public List<Enrollment> getAllEnrollmentsByCourse(Course course){
		List<Enrollment> allEnrollments = enrollmentRepository.findAllByCourse(course);
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
	
	public Enrollment add(Enrollment newEnrollment) {
		Enrollment e = new Enrollment();
		e.setStartDate(newEnrollment.getStartDate());
		e.setEndDate(newEnrollment.getEndDate());
		e.setStudent(newEnrollment.getStudent());
		e.setCourse(newEnrollment.getCourse());
		
		e = this.enrollmentRepository.save(e);
		return e;
	}
	
	

}
