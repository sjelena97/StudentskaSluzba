package com.spring.projekateo.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/enrollments", produces = MediaType.APPLICATION_JSON_VALUE)
public class EnrollmentController {
	
	@Autowired
    private EnrollmentService enrollmentService;
	
	@Autowired
    private StudentService studentService;
	
	@GetMapping("/getAllEnrollmentsForStudent/{student_id}")
	public Set<Enrollment> getAllEnrollmentsForStudent(@PathVariable("student_id") int student_id){
			Student student = studentService.findById(student_id);
		 	Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
		    return enrollments; 
	}

}
