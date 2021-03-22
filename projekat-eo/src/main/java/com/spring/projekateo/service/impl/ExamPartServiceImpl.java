package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.repository.ExamPartRepository;
import com.spring.projekateo.service.ExamPartService;

public class ExamPartServiceImpl implements ExamPartService{
	
	@Autowired
    ExamPartRepository examPartRepository;

	@Override
	public ExamPart findById(Integer examPartId){
		return examPartRepository.findById(examPartId);
	}
	
	@Override
	public ExamPart save(ExamPart examPart) {
		return examPartRepository.save(examPart);
	}
}
