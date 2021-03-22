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
	public Exam findById(Integer id) {
		return examRepository.findById(id);
	}
	
	@Override
    public List<Exam> getAllExamsByEnrollment(Enrollment enrollment){
		List<Exam> allExams = examRepository.findAllByEnrollment(enrollment);
        return allExams;
	}
	
	//daj sve ispite za course
	
	@Override
	public Exam save(Exam exam) {
		return examRepository.save(exam);
	}
	
	//examDTO
	@Override
	public Exam add(Exam newExam) {
		Exam e = new Exam();
		e.setExamPeriod(newExam.getExamPeriod());
		e.setParts(newExam.getParts());
		
		e = this.examRepository.save(e);
		return e;
	}

}
