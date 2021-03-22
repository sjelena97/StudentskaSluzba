package com.spring.projekateo.service;

import com.spring.projekateo.model.ExamPart;

public interface ExamPartService {

	ExamPart findById(Integer examPartId);

	ExamPart save(ExamPart examPart);

	ExamPart add(ExamPart newExamPart);

}