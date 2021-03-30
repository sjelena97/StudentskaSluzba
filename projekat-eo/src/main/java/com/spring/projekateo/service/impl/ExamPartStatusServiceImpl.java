package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.ExamPartStatus;
import com.spring.projekateo.repository.ExamPartStatusRepository;
import com.spring.projekateo.service.ExamPartStatusService;

@Service
public class ExamPartStatusServiceImpl implements ExamPartStatusService{
	
	@Autowired
	private ExamPartStatusRepository examPartStatusRepository;
	
	@Override
	public ExamPartStatus findByCode(String code) {
		ExamPartStatus eps = examPartStatusRepository.findByCode(code);
		return eps;
	}

}
