package com.spring.projekateo.service;

import java.util.Set;

import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.ExamPart;

public interface ExamPartService {

	ExamPart findById(Integer examPartId);

	ExamPart save(ExamPart examPart);

	Set<ExamPart> getAllExamPartsByExam(Exam exam);

	void remove(ExamPart examPart);

}
