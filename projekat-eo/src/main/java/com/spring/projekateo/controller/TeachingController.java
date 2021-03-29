package com.spring.projekateo.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.service.TeacherService;
import com.spring.projekateo.service.TeachingService;

@RestController
@RequestMapping(value = "/teachings", produces = MediaType.APPLICATION_JSON_VALUE)
public class TeachingController {

	@Autowired
	private TeachingService teachingService;
	
	@Autowired 
	private TeacherService teacherService;
	
	@GetMapping("/getAllTeachingsForTeacher/{teacher_id}") 
	public Set<Teaching> getAllTeachingsForTeacher(@PathVariable("teacher_id") int teacher_id) {
		Teacher teacher = teacherService.findById(teacher_id);
	 	Set<Teaching> teachings = teachingService.getAllTeachingsByTeacher(teacher);
	    return teachings; 
		
		
	}
	
	
}
