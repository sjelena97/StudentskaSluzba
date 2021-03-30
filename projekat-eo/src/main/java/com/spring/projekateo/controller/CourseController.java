package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.CourseDTO;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.service.CourseService;

@RestController
@RequestMapping(value = "/courses", produces = MediaType.APPLICATION_JSON_VALUE)
public class CourseController {

	@Autowired
	private CourseService courseService;
	
	
	@GetMapping("/getAllCourses") 
	public ResponseEntity<List<CourseDTO>> getAllCourses() {
		List<Course> courses = courseService.getAllCourses();
		//convert courses to DTOs
		List<CourseDTO> coursesDTO = new ArrayList<>();
		for (Course c : courses) {
			coursesDTO.add(new CourseDTO(c));
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
		
		c = this.courseService.save(c);
				
		return new ResponseEntity<CourseDTO>(new CourseDTO(c), HttpStatus.CREATED);	
	}
	
	
}