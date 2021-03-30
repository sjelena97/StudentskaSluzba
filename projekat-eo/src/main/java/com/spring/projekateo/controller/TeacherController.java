package com.spring.projekateo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.TeacherDTO;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.service.TeacherService;

@RestController
@RequestMapping(value = "/teachers", produces = MediaType.APPLICATION_JSON_VALUE)
public class TeacherController {
	
	@Autowired
    private TeacherService teacherService;
	
	
	@PutMapping(value = "updateTeacher/{teacher_id}")
	public ResponseEntity<TeacherDTO> updateTeacher(@RequestBody TeacherDTO teacherDTO , @PathVariable("teacher_id") int teacher_id) {
		
		Teacher teacher = teacherService.findById(teacher_id);
		if (teacher == null) {
			return new ResponseEntity<TeacherDTO>(HttpStatus.BAD_REQUEST);
		}
		
		teacher.setActive(teacherDTO.isActive());
		teacher = teacherService.save(teacher);
		return new ResponseEntity<TeacherDTO>(new TeacherDTO(teacher), HttpStatus.OK);
		
	}
}
