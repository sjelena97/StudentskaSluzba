package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;

public interface DocumentRepository extends JpaRepository<Document, Long>{

	List<Document> findAllByStudent(Student student);

}
