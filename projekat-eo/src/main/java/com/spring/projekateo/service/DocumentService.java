package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;

public interface DocumentService {

	List<Document> getAllDocumentsByStudent(Student student);

	Document findById(Integer id);

	Document save(Document document);

	void remove(Document document);

}
