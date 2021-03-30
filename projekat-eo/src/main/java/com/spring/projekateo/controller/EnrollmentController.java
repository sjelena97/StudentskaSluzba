package com.spring.projekateo.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.CourseDTO;
import com.spring.projekateo.dto.EnrollmentDTO;
import com.spring.projekateo.dto.TeachingDTO;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.model.TeachingType;
import com.spring.projekateo.service.CourseService;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/enrollments", produces = MediaType.APPLICATION_JSON_VALUE)
public class EnrollmentController {
	
	@Autowired
    private EnrollmentService enrollmentService;
	
	@Autowired
    private StudentService studentService;
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/getAllEnrollmentsForStudent/{student_id}")
	public Set<Enrollment> getAllEnrollmentsForStudent(@PathVariable("student_id") int student_id){
			Student student = studentService.findById(student_id);
		 	Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
		    return enrollments; 
	}
	
	@GetMapping("/getAllEnrollmentsForCourse/{course_id}") 
	public Set<Enrollment> getAllEnrollmentsForCourse(@PathVariable("course_id") int course_id) {
		Course course = courseService.findById(course_id);
	 	Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByCourse(course);
	    return enrollments; 
	}
	
	@PostMapping("/addEnrollment/{course_id}")
	public ResponseEntity<EnrollmentDTO> createEnrollment(@RequestBody EnrollmentDTO newEnrollment, @PathVariable("course_id") int course_id) {
		 
		Course course = courseService.findById(course_id);
		if (course == null) {
			return new ResponseEntity<EnrollmentDTO>(HttpStatus.BAD_REQUEST);
		}
		Student student = studentService.findById(newEnrollment.getStudent().getId());
		if (student == null) {
			return new ResponseEntity<EnrollmentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Enrollment enrollment = new Enrollment();
		enrollment.setCourse(course);
		enrollment.setStartDate(newEnrollment.getStartDate());
		enrollment.setEndDate(newEnrollment.getEndDate());
		enrollment.setStudent(student);
		
		enrollment = enrollmentService.save(enrollment);
		return new ResponseEntity<EnrollmentDTO>(new EnrollmentDTO(enrollment), HttpStatus.CREATED);	
	}
	
	@PutMapping("/updateEnrollment/{enrollment_id}")
	public ResponseEntity<EnrollmentDTO> updateEnrollment(@RequestBody EnrollmentDTO enrollmentDTO, @PathVariable("enrollment_id") int enrollment_id){

		Enrollment enrollment = enrollmentService.findById(enrollment_id);
		if(enrollment == null) {
			return new ResponseEntity<EnrollmentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Course course = courseService.findById(enrollmentDTO.getCourse().getId());
		if (course == null) {
			return new ResponseEntity<EnrollmentDTO>(HttpStatus.BAD_REQUEST);
		}
		Student student = studentService.findById(enrollmentDTO.getStudent().getId());
		if (student == null) {
			return new ResponseEntity<EnrollmentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		enrollment.setCourse(course);
		enrollment.setStartDate(enrollmentDTO.getStartDate());
		enrollment.setEndDate(enrollmentDTO.getEndDate());
		enrollment.setStudent(student);
		
		enrollment = enrollmentService.save(enrollment);
		
		return new ResponseEntity<EnrollmentDTO>(new EnrollmentDTO(enrollment), HttpStatus.OK);	
	}
}
