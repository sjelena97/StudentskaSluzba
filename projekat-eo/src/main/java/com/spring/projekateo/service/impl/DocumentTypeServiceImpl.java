package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.DocumentType;
import com.spring.projekateo.repository.DocumentTypeRepository;
import com.spring.projekateo.service.DocumentTypeService;

public class DocumentTypeServiceImpl implements DocumentTypeService{
	
	@Autowired
	DocumentTypeRepository documentTypeRepository;
	
	@Override
	public DocumentType findById(Integer typeId){
		return documentTypeRepository.findById(typeId);
	}

}
