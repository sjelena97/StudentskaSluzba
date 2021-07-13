package com.spring.projekateo.service;

import java.util.Date;
import java.util.Set;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.ExamPart;

public interface ExamPartService {

	ExamPart findById(Integer examPartId);

	ExamPart save(ExamPart examPart);

	void remove(ExamPart examPart);

	Set<ExamPart> getAllExamPartsByCourse(Course course);

	Set<ExamPart> getAllExamPartsByCourseAndDateBetween(Course course, Date startDate,
			Date endDate);

}
