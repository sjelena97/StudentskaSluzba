package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
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
import com.spring.projekateo.dto.StudentDTO;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.CourseService;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.StudentService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/enrollments", produces = MediaType.APPLICATION_JSON_VALUE)
public class EnrollmentController {
	
	@Autowired
    private EnrollmentService enrollmentService;
	
	@Autowired
    private StudentService studentService;
	
	@Autowired
    private UserService userService;
	
	@Autowired
	private CourseService courseService;
	
	@GetMapping("/getAllEnrollmentsForUser/{username}")
	public ResponseEntity<List<EnrollmentDTO>> getAllEnrollmentsForUser(@PathVariable("username") String username){
			User user = userService.findByUsername(username);
			Student student = studentService.findByUser(user);
			Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
			
			List<EnrollmentDTO> enrollmentsDTO = new ArrayList<>();
			for (Enrollment e: enrollments) {
				if(e.isActive()) {
					EnrollmentDTO enrollmentDTO = new EnrollmentDTO();
					enrollmentDTO.setId(e.getId());
					enrollmentDTO.setStartDate(e.getStartDate());
					enrollmentDTO.setEndDate(e.getEndDate());
					enrollmentDTO.setGrade(e.getGrade());
					enrollmentDTO.setCourse(new CourseDTO(e.getCourse()));
					enrollmentDTO.setActive(e.isActive());
					//we leave student field empty
					
					enrollmentsDTO.add(enrollmentDTO);
				}
			}
			return new ResponseEntity<>(enrollmentsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllPassedEnrollmentsForUser/{username}")
	public ResponseEntity<List<EnrollmentDTO>> getAllPassedEnrollmentsForUser(@PathVariable("username") String username){
			User user = userService.findByUsername(username);
			Student student = studentService.findByUser(user);
			Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
			Set<Enrollment> passedEnrollments = new HashSet<Enrollment>();
			for(Enrollment e : enrollments) {
				if(e.getGrade() > 5) {
					passedEnrollments.add(e);
				}
			}
			
			List<EnrollmentDTO> enrollmentsDTO = new ArrayList<>();
			for (Enrollment e: passedEnrollments) {
				if(e.isActive()) {
					EnrollmentDTO enrollmentDTO = new EnrollmentDTO();
					enrollmentDTO.setId(e.getId());
					enrollmentDTO.setStartDate(e.getStartDate());
					enrollmentDTO.setEndDate(e.getEndDate());
					enrollmentDTO.setGrade(e.getGrade());
					enrollmentDTO.setCourse(new CourseDTO(e.getCourse()));
					enrollmentDTO.setActive(e.isActive());
					//we leave student field empty
					
					enrollmentsDTO.add(enrollmentDTO);
				}
			}
			return new ResponseEntity<>(enrollmentsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllEnrollmentsForStudent/{student_id}")
	public ResponseEntity<List<EnrollmentDTO>> getAllEnrollmentsForStudent(@PathVariable("student_id") int student_id){
		
			Student student = studentService.findById(student_id);
			if(student == null) {
				return new ResponseEntity<List<EnrollmentDTO>>(HttpStatus.BAD_REQUEST);
			}
			
		 	Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
		 	List<EnrollmentDTO> enrollmentsDTO = new ArrayList<>();
			for (Enrollment e: enrollments) {
				EnrollmentDTO enrollmentDTO = new EnrollmentDTO();
				enrollmentDTO.setId(e.getId());
				enrollmentDTO.setStartDate(e.getStartDate());
				enrollmentDTO.setEndDate(e.getEndDate());
				enrollmentDTO.setGrade(e.getGrade());
				enrollmentDTO.setCourse(new CourseDTO(e.getCourse()));
				enrollmentDTO.setActive(e.isActive());
				//we leave student field empty
				
				enrollmentsDTO.add(enrollmentDTO);
			}
			return new ResponseEntity<>(enrollmentsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllEnrollmentsForCourse/{course_id}") 
	public ResponseEntity<List<EnrollmentDTO>> getAllEnrollmentsForCourse(@PathVariable("course_id") int course_id) {
		Course course = courseService.findById(course_id);
	 	Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByCourse(course);
	 	List<EnrollmentDTO> enrollmentsDTO = new ArrayList<>();
		for (Enrollment e: enrollments) {
			if(e.isActive()) {
				EnrollmentDTO enrollmentDTO = new EnrollmentDTO();
				enrollmentDTO.setId(e.getId());
				enrollmentDTO.setStartDate(e.getStartDate());
				enrollmentDTO.setEndDate(e.getEndDate());
				enrollmentDTO.setGrade(e.getGrade());
				enrollmentDTO.setStudent(new StudentDTO(e.getStudent()));
				enrollmentDTO.setActive(e.isActive());
				//we leave course field empty
				
				enrollmentsDTO.add(enrollmentDTO);
			}
		}
		return new ResponseEntity<>(enrollmentsDTO, HttpStatus.OK);
	}
	
	@GetMapping("getEnrollmentById/{enrollment_id}")
	public ResponseEntity<EnrollmentDTO> getEnrollmentById(@PathVariable("enrollment_id") int enrollment_id) {
		Enrollment e = enrollmentService.findById(enrollment_id);
		if (e == null) {
			return new ResponseEntity<EnrollmentDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<EnrollmentDTO>(new EnrollmentDTO(e), HttpStatus.OK);
		}
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
		enrollment.setGrade(5);
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
		enrollment.setGrade(enrollmentDTO.getGrade());
		enrollment.setStudent(student);
		enrollment.setActive(enrollmentDTO.isActive());
		
		enrollment = enrollmentService.save(enrollment);
		
		return new ResponseEntity<EnrollmentDTO>(new EnrollmentDTO(enrollment), HttpStatus.OK);	
	}
	
	@PutMapping("/updateEnrollmentGrade/{enrollment_id}")
	public ResponseEntity<EnrollmentDTO> updateEnrollmentGrade(@RequestBody int grade, @PathVariable("enrollment_id") int enrollment_id){

		Enrollment enrollment = enrollmentService.findById(enrollment_id);
		if(enrollment == null) {
			return new ResponseEntity<EnrollmentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		enrollment.setGrade(grade);
		
		enrollment = enrollmentService.save(enrollment);
		
		return new ResponseEntity<EnrollmentDTO>(new EnrollmentDTO(enrollment), HttpStatus.OK);	
	}
	
	@PutMapping("/deleteEnrollment/{enrollment_id}")
	public ResponseEntity<Void> deleteEnrollment(@PathVariable("enrollment_id") int enrollment_id) {

		Enrollment enrollment = enrollmentService.findById(enrollment_id);
		if (enrollment != null){
			enrollment.setActive(false);
			enrollment = enrollmentService.save(enrollment);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {		
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		
	}
}
