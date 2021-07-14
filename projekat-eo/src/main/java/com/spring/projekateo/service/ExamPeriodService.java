package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.ExamPeriod;

public interface ExamPeriodService {

	ExamPeriod findById(Integer examPeriodId);

	ExamPeriod save(ExamPeriod examPeriod);

	List<ExamPeriod> getAllExamPeriods();

	void remove(ExamPeriod examPeriod);

}
