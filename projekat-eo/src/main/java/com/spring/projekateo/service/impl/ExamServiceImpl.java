package com.spring.projekateo.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;
import com.spring.projekateo.repository.ExamRepository;
import com.spring.projekateo.service.ExamService;

@Service
public class ExamServiceImpl implements ExamService{
	
	@Autowired
    ExamRepository examRepository;
	
	@Override
	public Exam findById(Integer id) {
		return examRepository.findById(id);
	}
	
	@Override
    public Set<Exam> getAllExamsByEnrollment(Enrollment enrollment){
		Set<Exam> allExams = examRepository.findAllByEnrollment(enrollment);
        return allExams;
	}
	
	//daj sve ispite za course
	
	@Override
	public Exam save(Exam exam) {
		return examRepository.save(exam);
	}

}
