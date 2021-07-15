package com.spring.projekateo.service.impl;

import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
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
	
	@Override
	public Resource download(String documentUrl) {
		    try {
		    	Path path = Paths.get(documentUrl);
				System.out.println("Putanja do fajla mi je: " + path);
				
	            Resource resource = new UrlResource(path.toUri());

	            if (resource.exists() || resource.isReadable()) {
	                return resource;
	            } else {
	                throw new RuntimeException("Could not read the file!");
	            }
	            
	        } catch (MalformedURLException e) {
	            throw new RuntimeException("Error: " + e.getMessage());
	        }
	    }

}
