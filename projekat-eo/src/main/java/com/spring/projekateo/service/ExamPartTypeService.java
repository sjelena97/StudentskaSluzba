package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.ExamPartType;

public interface ExamPartTypeService {

	ExamPartType findById(Integer id);

	ExamPartType findByCode(String code);

	List<ExamPartType> getAllExamPartTypes();

}
