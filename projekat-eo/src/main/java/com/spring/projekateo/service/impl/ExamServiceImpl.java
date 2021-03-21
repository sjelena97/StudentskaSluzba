package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;
import com.spring.projekateo.repository.ExamRepository;
import com.spring.projekateo.service.ExamService;

public class ExamServiceImpl implements ExamService{
	
	@Autowired
    ExamRepository examRepository;
	
	@Override
    public List<Exam> getAllExamsByEnrollment(Enrollment enrollment){
		List<Exam> allExams = examRepository.findAllByEnrollment(enrollment);
        return allExams;
	}

}
