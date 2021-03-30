package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.DocumentType;

public interface DocumentTypeRepository extends JpaRepository<Document, Long>{

	DocumentType findById(Integer typeId);

}
