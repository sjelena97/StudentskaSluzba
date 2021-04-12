package com.spring.projekateo.service;

import java.util.Set;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.ExamPeriod;
import com.spring.projekateo.model.Teaching;

public interface ExamService {

	Set<Exam> getAllExamsByEnrollment(Enrollment enrollment);

	Exam findById(Integer id);

	Exam save(Exam exam);

	Set<Exam> getAllExamsByCourse(Course course);

	void remove(Exam exam);

	Set<Exam> getAllExamsByExamPeriod(ExamPeriod examPeriod);

	Set<Exam> getAllExamsByTeaching(Teaching teaching);

}
