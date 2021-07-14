package com.spring.projekateo.service.impl;

import java.util.List;

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
	
	@Override
    public List<ExamPeriod> getAllExamPeriods(){
		List<ExamPeriod> allPeriods= examPeriodRepository.findAll();
        return allPeriods;
	}
	
	@Override
	public void remove(ExamPeriod examPeriod) {
		examPeriodRepository.delete(examPeriod);
	}
	
}
