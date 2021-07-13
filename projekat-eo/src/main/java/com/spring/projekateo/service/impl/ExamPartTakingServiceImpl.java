package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.model.ExamPartStatus;
import com.spring.projekateo.model.ExamPartTaking;
import com.spring.projekateo.repository.ExamPartTakingRepository;
import com.spring.projekateo.service.ExamPartTakingService;

@Service
public class ExamPartTakingServiceImpl implements ExamPartTakingService{
	
	@Autowired
    ExamPartTakingRepository examPartTakingRepository;

	@Override
	public ExamPartTaking findById(Integer examPartTakingId){
		return examPartTakingRepository.findById(examPartTakingId);
	}

	@Override
    public List<ExamPartTaking> getAllTakingsByPart(ExamPart examPart){
		List<ExamPartTaking> allTakings= examPartTakingRepository.findAllByPart(examPart);
        return allTakings;
	}
	
	@Override
    public List<ExamPartTaking> getAllTakingsByPartAndStatusNot(ExamPart examPart, ExamPartStatus status){
		List<ExamPartTaking> allTakings= examPartTakingRepository.findAllByPartAndStatusNot(examPart, status);
        return allTakings;
	}
	
	@Override
    public List<ExamPartTaking> getAllTakingsByPartAndEnrollment(ExamPart examPart, Enrollment enrollment){
		List<ExamPartTaking> allTakings= examPartTakingRepository.findAllByPartAndEnrollment(examPart, enrollment);
        return allTakings;
	}
	
	@Override
	public ExamPartTaking save(ExamPartTaking examPartTaking) {
		return examPartTakingRepository.save(examPartTaking);
	}
	
}
