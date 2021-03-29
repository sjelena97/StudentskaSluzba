package com.spring.projekateo.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.service.DocumentService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/documents", produces = MediaType.APPLICATION_JSON_VALUE)
public class DocumentController {
	
	@Autowired
    private DocumentService documentService;
	
	@Autowired
    private StudentService studentService;
	
	@GetMapping("/getAllDocumentsForStudent/{student_id}")
	public Set<Document> getAllDocumentsForStudent(@PathVariable("student_id") int student_id){
			Student student = studentService.findById(student_id);
		 	Set<Document> documents = documentService.getAllDocumentsByStudent(student);
		    return documents; 
	}

}
