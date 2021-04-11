package com.spring.projekateo.service;

import java.util.Set;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;

public interface ExamService {

	Set<Exam> getAllExamsByEnrollment(Enrollment enrollment);

	Exam findById(Integer id);

	Exam save(Exam exam);

}
