package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.ExamPartStatus;

public interface ExamPartStatusService {

	ExamPartStatus findByCode(String code);

	List<ExamPartStatus> getAllExamPartStatuses();

	ExamPartStatus findById(Integer id);

}
