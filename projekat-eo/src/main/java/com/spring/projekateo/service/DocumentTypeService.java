package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.DocumentType;

public interface DocumentTypeService {

	DocumentType findById(Integer typeId);

	List<DocumentType> getAllDocumentTypes();

}
