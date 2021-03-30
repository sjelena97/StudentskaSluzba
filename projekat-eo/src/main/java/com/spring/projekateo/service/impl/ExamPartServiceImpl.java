package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	//exampartDTO
	@Override
	public ExamPart add(ExamPart newExamPart) {
		ExamPart ep = new ExamPart();
		ep.setDate(newExamPart.getDate());
		ep.setLocation(newExamPart.getLocation());
		ep.setExam(newExamPart.getExam());
		ep.setType(newExamPart.getType());
		
		ep = this.examPartRepository.save(ep);
		return ep;
	}
}
