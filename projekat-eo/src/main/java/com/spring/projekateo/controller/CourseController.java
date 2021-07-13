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
import com.spring.projekateo.model.Authority;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.CourseService;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.StudentService;
import com.spring.projekateo.service.TeacherService;
import com.spring.projekateo.service.TeachingService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/courses", produces = MediaType.APPLICATION_JSON_VALUE)
public class CourseController {

	@Autowired
	private CourseService courseService;
	
	@Autowired
    private EnrollmentService enrollmentService;
	
	@Autowired
    private StudentService studentService;
	
	@Autowired
    private TeacherService teacherService;
	
	@Autowired
    private TeachingService teachingService;
	
	@Autowired
    private UserService userService;

	@GetMapping("/getAllCourses")
	public ResponseEntity<List<CourseDTO>> getAllCourses() {
		List<Course> courses = courseService.getAllCourses();
		// convert courses to DTOs
		List<CourseDTO> coursesDTO = new ArrayList<>();
		for (Course c : courses) {
			coursesDTO.add(new CourseDTO(c));
		}
		return new ResponseEntity<>(coursesDTO, HttpStatus.OK);
	}
	
	@GetMapping("getCourseById/{course_id}")
	public ResponseEntity<CourseDTO> getCourseById(@PathVariable("course_id") int course_id) {
		Course course = courseService.findById(course_id);
		if (course == null) {
			return new ResponseEntity<CourseDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<CourseDTO>(new CourseDTO(course), HttpStatus.OK);
		}
	}

	
	@GetMapping("/getAllCoursesForUser/{username}")
	public ResponseEntity<List<CourseDTO>> getAllCoursesForUser(@PathVariable("username") String username){
			User user = userService.findByUsername(username);
			if (user == null) {
				return new ResponseEntity<List<CourseDTO>>(HttpStatus.BAD_REQUEST);
			}
			Authority authority = user.getAuthority();
			Set<Course> courses = new HashSet<Course>();
			if(authority.getName().equalsIgnoreCase("ADMIN")){
			 	List<Course> allCourses = courseService.getAllCourses();
			 	for (Course c: allCourses) {
			 		courses.add(c);
				}
			}else if(authority.getName().equalsIgnoreCase("TEACHER")) {
				Teacher teacher = teacherService.findByUser(user);
			 	Set<Teaching> teachings = teachingService.getAllTeachingsByTeacher(teacher);
			 	for (Teaching t: teachings) {
			 		courses.add(t.getCourse());
				}
			}else if(authority.getName().equalsIgnoreCase("STUDENT")){
				Student student = studentService.findByUser(user);
			 	Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
			 	for (Enrollment e: enrollments) {
			 		courses.add(e.getCourse());
				}
			}
			
		 	List<CourseDTO> coursesDTO = new ArrayList<>();
			for (Course c: courses) {
				if(c.isActive()) {
					CourseDTO courseDTO = new CourseDTO();
					courseDTO.setId(c.getId());
					courseDTO.setName(c.getName());
					courseDTO.setCode(c.getCode());
					courseDTO.setESPB(c.getESPB());
					courseDTO.setActive(c.isActive());
					
					coursesDTO.add(courseDTO);
				}
			}
			return new ResponseEntity<>(coursesDTO, HttpStatus.OK);
	}

	@PostMapping("/addCourse")
	public ResponseEntity<CourseDTO> createCourse(@RequestBody CourseDTO courseDTO) {

		Course course = courseService.findCourseByCode(courseDTO.getCode());
		if (course != null) {
			return new ResponseEntity<CourseDTO>(HttpStatus.BAD_REQUEST);
		}

		Course c = new Course();

		c.setCode(courseDTO.getCode());
		c.setName(courseDTO.getName());
		c.setESPB(courseDTO.getESPB());

		c = courseService.save(c);

		return new ResponseEntity<CourseDTO>(new CourseDTO(c), HttpStatus.CREATED);
	}

	@PutMapping("/updateCourse/{course_id}")
	public ResponseEntity<CourseDTO> updateCourse(@RequestBody CourseDTO courseDTO,
			@PathVariable("course_id") int course_id) {

		Course course = courseService.findById(course_id);
		if (course == null) {
			return new ResponseEntity<CourseDTO>(HttpStatus.BAD_REQUEST);
		}

		if (!courseDTO.getCode().equalsIgnoreCase(course.getCode())) {
			Course course1 = courseService.findCourseByCode(courseDTO.getCode());

			if (course1 != null) {
				return new ResponseEntity<CourseDTO>(HttpStatus.BAD_REQUEST);
			}
		}

		course.setCode(courseDTO.getCode());
		course.setName(courseDTO.getName());
		course.setESPB(courseDTO.getESPB());
		course.setActive(courseDTO.isActive());

		course = courseService.save(course);

		return new ResponseEntity<CourseDTO>(new CourseDTO(course), HttpStatus.OK);
	}
	
	@PutMapping("/deleteCourse/{course_id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable("course_id") int course_id) {

		Course course = courseService.findById(course_id);
		if (course != null){
			course.setActive(false);
			course = courseService.save(course);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {		
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		
	}


}
