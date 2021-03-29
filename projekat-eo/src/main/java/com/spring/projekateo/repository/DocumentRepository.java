package com.spring.projekateo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.Student;

public interface DocumentRepository extends JpaRepository<Document, Long>{

	Set<Document> findAllByStudent(Student student);

	Document findById(Integer id);

}
