package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;

public interface DocumentService {

	List<Document> getAllDocumentsByStudent(Student student);

}
