package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;

public interface ExamService {

	List<Exam> getAllExamsByEnrollment(Enrollment enrollment);

}
