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

import com.spring.projekateo.dto.ExamPartStatusDTO;
import com.spring.projekateo.model.ExamPartStatus;
import com.spring.projekateo.service.ExamPartStatusService;

@RestController
@RequestMapping(value = "/examPartStatuses", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamPartStatusController {

	@Autowired
	private ExamPartStatusService examPartStatusService;
	
	@GetMapping("/getAllExamPartStatuses")
	public  ResponseEntity<List<ExamPartStatusDTO>> getAllExamPartStatuses(){
		 	List<ExamPartStatus> statuses = examPartStatusService.getAllExamPartStatuses();
		 	List<ExamPartStatusDTO> statusesDTO = new ArrayList<>();
			for (ExamPartStatus eps : statuses) {
				ExamPartStatusDTO statusDTO = new ExamPartStatusDTO();
				statusDTO.setId(eps.getId());
				statusDTO.setName(eps.getName());
				statusDTO.setCode(eps.getCode());
				
				statusesDTO.add(statusDTO);
			}
			return new ResponseEntity<>(statusesDTO, HttpStatus.OK);
	}
	
}
