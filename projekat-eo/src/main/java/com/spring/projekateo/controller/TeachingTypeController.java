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

import com.spring.projekateo.dto.TeachingTypeDTO;
import com.spring.projekateo.model.TeachingType;
import com.spring.projekateo.service.TeachingTypeService;

@RestController
@RequestMapping(value = "/teachingTypes", produces = MediaType.APPLICATION_JSON_VALUE)
public class TeachingTypeController {
	
	@Autowired
    private TeachingTypeService teachingTypeService;
	
	@GetMapping("/getAllTeachingTypes")
	public  ResponseEntity<List<TeachingTypeDTO>> getAllTeachingTypes(){
		 	List<TeachingType> types = teachingTypeService.getAllTeachingTypes();
		 	List<TeachingTypeDTO> typesDTO = new ArrayList<>();
			for (TeachingType tt : types) {
				TeachingTypeDTO typeDTO = new TeachingTypeDTO();
				typeDTO.setId(tt.getId());
				typeDTO.setName(tt.getName());
				typeDTO.setCode(tt.getCode());
				
				typesDTO.add(typeDTO);
			}
			return new ResponseEntity<>(typesDTO, HttpStatus.OK);
	}
	

}
