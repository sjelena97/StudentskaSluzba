package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.repository.DocumentRepository;
import com.spring.projekateo.service.DocumentService;

public class DocumentServiceImpl implements DocumentService{
	
	@Autowired
    DocumentRepository documentRepository;
	
	@Override
    public List<Document> getAllDocumentsByStudent(Student student){
		List<Document> allDocuments = documentRepository.findAllByStudent(student);
        return allDocuments;
	}

}
