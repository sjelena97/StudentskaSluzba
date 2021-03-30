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

import com.spring.projekateo.dto.TeachingDTO;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.model.TeachingType;
import com.spring.projekateo.service.CourseService;
import com.spring.projekateo.service.TeacherService;
import com.spring.projekateo.service.TeachingService;
import com.spring.projekateo.service.TeachingTypeService;

@RestController
@RequestMapping(value = "/teachings", produces = MediaType.APPLICATION_JSON_VALUE)
public class TeachingController {

	@Autowired
	private TeachingService teachingService;
	
	@Autowired 
	private TeacherService teacherService;
	
	@Autowired 
	private CourseService courseService;
	
	@Autowired 
	private TeachingTypeService teachingTypeService;
	
	@GetMapping("/getAllTeachingsForTeacher/{teacher_id}") 
	public Set<Teaching> getAllTeachingsForTeacher(@PathVariable("teacher_id") int teacher_id) {
		Teacher teacher = teacherService.findById(teacher_id);
	 	Set<Teaching> teachings = teachingService.getAllTeachingsByTeacher(teacher);
	    return teachings; 
	}
	
	
	@GetMapping("/getAllTeachingsForCourse/{course_id}") 
	public Set<Teaching> getAllTeachingsForCourse(@PathVariable("course_id") int course_id) {
		Course course = courseService.findById(course_id);
	 	Set<Teaching> teachings = teachingService.getAllTeachingsByCourse(course);
	    return teachings; 
	}
	
	@PostMapping("/addTeaching/{course_id}")
	public ResponseEntity<TeachingDTO> createTeaching(@RequestBody TeachingDTO newTeaching, @PathVariable("course_id") int course_id) {
		 
		Course course = courseService.findById(course_id);
		if (course == null) {
			return new ResponseEntity<TeachingDTO>(HttpStatus.BAD_REQUEST);
		}
		Teacher teacher = teacherService.findById(newTeaching.getTeacher().getId());
		if (teacher == null) {
			return new ResponseEntity<TeachingDTO>(HttpStatus.BAD_REQUEST);
		}
		TeachingType type = teachingTypeService.findById(newTeaching.getType().getId());
		if (type == null) {
			return new ResponseEntity<TeachingDTO>(HttpStatus.BAD_REQUEST);
		}
		Teaching teaching = new Teaching();
		teaching.setCourse(course);
		teaching.setStartDate(newTeaching.getStartDate());
		teaching.setEndDate(newTeaching.getEndDate());
		teaching.setTeacher(teacher);
		teaching.setType(type);	
				
		teaching = teachingService.save(teaching);
		return new ResponseEntity<TeachingDTO>(new TeachingDTO(teaching), HttpStatus.CREATED);	
	}
	
	@PutMapping("/updateTeaching/{teaching_id}")
	public ResponseEntity<TeachingDTO> updateTeaching(@RequestBody TeachingDTO teachingDTO, @PathVariable("teaching_id") int teaching_id){
		//a teaching must exist
		Teaching teaching = teachingService.findById(teaching_id);
		if (teaching == null) {
			return new ResponseEntity<TeachingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Teacher teacher = teacherService.findById(teachingDTO.getTeacher().getId());
		if (teacher == null) {
			return new ResponseEntity<TeachingDTO>(HttpStatus.BAD_REQUEST);
		}
		TeachingType type = teachingTypeService.findById(teachingDTO.getType().getId());
		if (type == null) {
			return new ResponseEntity<TeachingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		teaching.setStartDate(teachingDTO.getStartDate());
		teaching.setEndDate(teachingDTO.getEndDate());
		teaching.setTeacher(teacher);
		teaching.setType(type);	
		teaching.setActive(teachingDTO.isActive());
		
		teaching = teachingService.save(teaching);
		
		return new ResponseEntity<TeachingDTO>(new TeachingDTO(teaching), HttpStatus.OK);	
	}
	
}
