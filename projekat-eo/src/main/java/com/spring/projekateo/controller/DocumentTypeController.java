package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.DocumentTypeDTO;
import com.spring.projekateo.model.DocumentType;
import com.spring.projekateo.service.DocumentTypeService;

@RestController
@RequestMapping(value = "/documentTypes", produces = MediaType.APPLICATION_JSON_VALUE)
public class DocumentTypeController {
	
	@Autowired
    private DocumentTypeService documentTypeService;
	
	@GetMapping("/getAllDocumentTypes")
	public  ResponseEntity<List<DocumentTypeDTO>> getAllDocumentTypes(){
		 	List<DocumentType> types = documentTypeService.getAllDocumentTypes();
		 	List<DocumentTypeDTO> typesDTO = new ArrayList<>();
			for (DocumentType dt : types) {
				DocumentTypeDTO typeDTO = new DocumentTypeDTO();
				typeDTO.setId(dt.getId());
				typeDTO.setName(dt.getName());
				typeDTO.setCode(dt.getCode());
				
				typesDTO.add(typeDTO);
			}
			return new ResponseEntity<>(typesDTO, HttpStatus.OK);
	}

}
