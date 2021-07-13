package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.model.ExamPartStatus;
import com.spring.projekateo.model.ExamPartTaking;

public interface ExamPartTakingService {

	ExamPartTaking findById(Integer examPartTakingId);

	List<ExamPartTaking> getAllTakingsByPart(ExamPart examPart);

	List<ExamPartTaking> getAllTakingsByPartAndStatusNot(ExamPart examPart, ExamPartStatus status);

	List<ExamPartTaking> getAllTakingsByPartAndEnrollment(ExamPart examPart, Enrollment enrollment);

	ExamPartTaking save(ExamPartTaking examPartTaking);

}
