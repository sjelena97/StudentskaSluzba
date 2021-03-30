package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.ExamPeriod;
import com.spring.projekateo.repository.ExamPeriodRepository;
import com.spring.projekateo.service.ExamPeriodService;

@Service
public class ExamPeriodServiceImpl implements ExamPeriodService{
	
	@Autowired
    ExamPeriodRepository examPeriodRepository;

	@Override
	public ExamPeriod findById(Integer examPeriodId){
		return examPeriodRepository.findById(examPeriodId);
	}
	
	@Override
	public ExamPeriod save(ExamPeriod examPeriod) {
		return examPeriodRepository.save(examPeriod);
	}
	
	//examPeriodDTO
	@Override
	public ExamPeriod add(ExamPeriod newExamPeriod) {
		ExamPeriod ep = new ExamPeriod();
		ep.setStartDate(newExamPeriod.getStartDate());
		ep.setEndDate(newExamPeriod.getEndDate());
		ep.setName(newExamPeriod.getName());
		
		ep = this.examPeriodRepository.save(ep);
		return ep;
	}

}
