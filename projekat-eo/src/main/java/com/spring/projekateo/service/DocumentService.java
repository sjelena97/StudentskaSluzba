package com.spring.projekateo.service;

import java.util.Set;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;

public interface DocumentService {

	Set<Document> getAllDocumentsByStudent(Student student);

	Document findById(Integer id);

	Document save(Document document);

	void remove(Document document);

}
