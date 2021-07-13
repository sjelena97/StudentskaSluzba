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

import com.spring.projekateo.dto.ExamPartTypeDTO;
import com.spring.projekateo.model.ExamPartType;
import com.spring.projekateo.service.ExamPartTypeService;

@RestController
@RequestMapping(value = "/examPartTypes", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamPartTypeController {
	
	@Autowired
	private ExamPartTypeService examPartTypeService;
	
	@GetMapping("/getAllExamPartTypes")
	public  ResponseEntity<List<ExamPartTypeDTO>> getAllExamPartTypes(){
		 	List<ExamPartType> types = examPartTypeService.getAllExamPartTypes();
		 	List<ExamPartTypeDTO> typesDTO = new ArrayList<>();
			for (ExamPartType ept : types) {
				ExamPartTypeDTO typeDTO = new ExamPartTypeDTO();
				typeDTO.setId(ept.getId());
				typeDTO.setName(ept.getName());
				typeDTO.setCode(ept.getCode());
				
				typesDTO.add(typeDTO);
			}
			return new ResponseEntity<>(typesDTO, HttpStatus.OK);
	}

}
