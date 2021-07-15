package com.spring.projekateo.service;

import java.util.Set;

import org.springframework.core.io.Resource;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;

public interface DocumentService {

	Set<Document> getAllDocumentsByStudent(Student student);

	Document findById(Integer id);

	Document save(Document document);

	void remove(Document document);

	Resource download(String documentUrl);

}
