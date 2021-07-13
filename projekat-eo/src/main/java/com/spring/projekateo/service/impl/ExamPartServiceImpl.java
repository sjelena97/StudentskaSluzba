package com.spring.projekateo.service.impl;

import java.util.Date;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Course;
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
    public Set<ExamPart> getAllExamPartsByCourse(Course course){
		Set<ExamPart> allExamParts = examPartRepository.findAllByCourse(course);
        return allExamParts;
	}
	
	@Override
    public Set<ExamPart> getAllExamPartsByCourseAndDateBetween(Course course, Date startDate,
			Date endDate){
		Set<ExamPart> allExamParts = examPartRepository.findAllByCourseAndDateBetween(course, startDate, endDate);
        return allExamParts;
	}
	
	@Override
	public ExamPart save(ExamPart examPart) {
		return examPartRepository.save(examPart);
	}
	
	@Override
	public void remove(ExamPart examPart) {
		examPartRepository.delete(examPart);
	}
	
}
