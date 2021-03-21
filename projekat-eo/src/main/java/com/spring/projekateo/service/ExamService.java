package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.Student;

public interface ExamService {

	List<Exam> getAllExamsByStudent(Student student);

}
