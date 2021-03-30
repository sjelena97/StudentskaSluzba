package com.spring.projekateo.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.repository.DocumentRepository;
import com.spring.projekateo.service.DocumentService;

@Service
public class DocumentServiceImpl implements DocumentService{
	
	@Autowired
    DocumentRepository documentRepository;
	
	@Override
	public Document findById(Integer id) {
		return documentRepository.findById(id);
	}
	
	@Override
    public Set<Document> getAllDocumentsByStudent(Student student){
		Set<Document> allDocuments = documentRepository.findAllByStudent(student);
        return allDocuments;
	}
	
	@Override
	public Document save(Document document) {
		return documentRepository.save(document);
	}
	
	@Override
	public void remove(Document document)  {
		documentRepository.delete(document);
	}
	
	public Document add(Document newDocument) {
		Document d = new Document();
		d.setTitle(newDocument.getTitle());
		d.setUrl(newDocument.getUrl());
		d.setType(newDocument.getType());
		d.setStudent(newDocument.getStudent());
		
		d = this.documentRepository.save(d);
		return d;
	}

}
