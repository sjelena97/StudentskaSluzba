package com.spring.projekateo.service;

import com.spring.projekateo.model.ExamPeriod;

public interface ExamPeriodService {

	ExamPeriod findById(Integer examPeriodId);

	ExamPeriod save(ExamPeriod examPeriod);

	ExamPeriod add(ExamPeriod newExamPeriod);

}
