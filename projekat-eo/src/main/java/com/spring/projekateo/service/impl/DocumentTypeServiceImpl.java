package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.DocumentType;
import com.spring.projekateo.repository.DocumentTypeRepository;
import com.spring.projekateo.service.DocumentTypeService;

@Service
public class DocumentTypeServiceImpl implements DocumentTypeService{
	
	@Autowired
	DocumentTypeRepository documentTypeRepository;
	
	@Override
	public DocumentType findById(Integer typeId){
		return documentTypeRepository.findById(typeId);
	}
	
	@Override
    public List<DocumentType> getAllDocumentTypes(){
		List<DocumentType> allDocumentTypes= documentTypeRepository.findAll();
        return allDocumentTypes;
	}

}
