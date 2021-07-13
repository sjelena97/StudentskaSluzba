package com.spring.projekateo.service.impl;

import java.util.List;

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
	public ExamPartStatus findById(Integer id) {
		return examPartStatusRepository.findById(id);
	}
	
	@Override
	public ExamPartStatus findByCode(String code) {
		ExamPartStatus eps = examPartStatusRepository.findByCode(code);
		return eps;
	}

	@Override
    public List<ExamPartStatus> getAllExamPartStatuses(){
		List<ExamPartStatus> allExamPartStatuses= examPartStatusRepository.findAll();
        return allExamPartStatuses;
	}
}
