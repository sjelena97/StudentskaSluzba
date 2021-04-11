package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.ExamPartType;
import com.spring.projekateo.repository.ExamPartTypeRepository;
import com.spring.projekateo.service.ExamPartTypeService;

@Service
public class ExamPartTypeServiceImpl implements ExamPartTypeService{
	
	@Autowired
    ExamPartTypeRepository examPartTypeRepository;
	
	@Override
	public ExamPartType findById(Integer id) {
		return examPartTypeRepository.findById(id);
	}

}
