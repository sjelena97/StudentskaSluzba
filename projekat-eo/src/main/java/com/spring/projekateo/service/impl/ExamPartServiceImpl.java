package com.spring.projekateo.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.repository.ExamPartRepository;
import com.spring.projekateo.service.ExamPartService;

@Service
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
	
	@Override
    public Set<ExamPart> getAllExamPartsByExam(Exam exam){
		Set<ExamPart> allExamParts = examPartRepository.findAllByExam(exam);
        return allExamParts;
	}
	
}
