package com.spring.projekateo.controller;

import java.util.ArrayList;
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

import com.spring.projekateo.dto.DocumentDTO;
import com.spring.projekateo.dto.DocumentTypeDTO;
import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.DocumentType;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.service.DocumentService;
import com.spring.projekateo.service.DocumentTypeService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/documents", produces = MediaType.APPLICATION_JSON_VALUE)
public class DocumentController {
	
	@Autowired
    private DocumentService documentService;
	
	@Autowired
    private DocumentTypeService documentTypeService;
	
	@Autowired
    private StudentService studentService;
	
	@GetMapping("/getAllDocumentsForStudent/{student_id}")
	public ResponseEntity<List<DocumentDTO>> getAllDocumentsForStudent(@PathVariable("student_id") int student_id){
			Student student = studentService.findById(student_id);
		 	Set<Document> documents = documentService.getAllDocumentsByStudent(student);
		 	List<DocumentDTO> documentsDTO = new ArrayList<>();
			for (Document d : documents) {
				DocumentDTO documentDTO = new DocumentDTO();
				documentDTO.setId(d.getId());
				documentDTO.setTitle(d.getTitle());
				documentDTO.setUrl(d.getUrl());
				documentDTO.setType(new DocumentTypeDTO(d.getType()));
				documentDTO.setActive(d.isActive());
				//we leave student field empty
				
				documentsDTO.add(documentDTO);
			}
			return new ResponseEntity<>(documentsDTO, HttpStatus.OK);
	}
	
	@PostMapping("/addDocument/{student_id}")
	public ResponseEntity<DocumentDTO> createDocument(@RequestBody DocumentDTO newDocument, @PathVariable("student_id") int student_id) {
		 
		Student student = studentService.findById(student_id);
		if (student == null) {
			return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		}
		DocumentType type = documentTypeService.findById(newDocument.getType().getId());
		if (type == null) {
			return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		}
		Document document = new Document();
		document.setTitle(newDocument.getTitle());
		document.setUrl(document.getUrl());
		document.setStudent(student);
		document.setType(type);
				
		document = documentService.save(document);
		return new ResponseEntity<DocumentDTO>(new DocumentDTO(document), HttpStatus.CREATED);	
	}
	
	@PutMapping("/updateDocument/{document_id}")
	public ResponseEntity<DocumentDTO> updateDocument(@RequestBody DocumentDTO documentDTO, @PathVariable("document_id") int document_id){
		//a document must exist
		Document document = documentService.findById(document_id);
		if (document == null) {
			return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		DocumentType type = documentTypeService.findById(documentDTO.getType().getId());
		if (type == null) {
			return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		document.setTitle(documentDTO.getTitle());
		document.setUrl(documentDTO.getUrl());
		document.setType(type);
		document.setActive(documentDTO.isActive());
		
		document = documentService.save(document);
		
		return new ResponseEntity<DocumentDTO>(new DocumentDTO(document), HttpStatus.OK);	
	}

}
