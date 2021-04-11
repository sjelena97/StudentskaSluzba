package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.ExamPeriodDTO;
import com.spring.projekateo.model.ExamPeriod;
import com.spring.projekateo.service.ExamPeriodService;

@RestController
@RequestMapping(value = "/examPeriods", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamPeriodController {
	
	@Autowired
	private ExamPeriodService examPeriodService;
	
	@GetMapping("/getAllExamPeriods")
	public ResponseEntity<List<ExamPeriodDTO>> getAllPeriods() {
		List<ExamPeriod> periods = examPeriodService.getAllExamPeriods();
		// convert periods to DTOs
		List<ExamPeriodDTO> periodsDTO = new ArrayList<>();
		for (ExamPeriod ep : periods) {
			periodsDTO.add(new ExamPeriodDTO(ep));
		}
		return new ResponseEntity<>(periodsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllActiveExamPeriods")
	public ResponseEntity<List<ExamPeriodDTO>> getAllCurrentPeriods() {
		List<ExamPeriod> periods = examPeriodService.getAllExamPeriods();
		// convert periods to DTOs
		List<ExamPeriodDTO> periodsDTO = new ArrayList<>();
		for (ExamPeriod ep : periods) {
			if(ep.isActive()) {
				periodsDTO.add(new ExamPeriodDTO(ep));
			}
		}
		return new ResponseEntity<>(periodsDTO, HttpStatus.OK);
	}

	@PostMapping("/addExamPeriod")
	public ResponseEntity<ExamPeriodDTO> createExamPeriod(@RequestBody ExamPeriodDTO examPeriodDTO) {

		ExamPeriod ep = new ExamPeriod();

		ep.setName(examPeriodDTO.getName());
		ep.setStartDate(examPeriodDTO.getStartDate());
		ep.setEndDate(examPeriodDTO.getEndDate());

		ep = examPeriodService.save(ep);

		return new ResponseEntity<ExamPeriodDTO>(new ExamPeriodDTO(ep), HttpStatus.CREATED);
	}

	@PutMapping("/updateExamPeriod/{exam_period_id}")
	public ResponseEntity<ExamPeriodDTO> updateCourse(@RequestBody ExamPeriodDTO examPeriodDTO,
			@PathVariable("exam_period_id") int exam_period_id) {

		ExamPeriod examPeriod = examPeriodService.findById(exam_period_id);
		if (examPeriod == null) {
			return new ResponseEntity<ExamPeriodDTO>(HttpStatus.BAD_REQUEST);
		}

		examPeriod.setName(examPeriodDTO.getName());
		examPeriod.setStartDate(examPeriodDTO.getStartDate());
		examPeriod.setEndDate(examPeriodDTO.getEndDate());
		examPeriod.setActive(examPeriodDTO.isActive());

		examPeriod = examPeriodService.save(examPeriod);

		return new ResponseEntity<ExamPeriodDTO>(new ExamPeriodDTO(examPeriod), HttpStatus.OK);
	}

}
