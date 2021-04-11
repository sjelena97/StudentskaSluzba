package com.spring.projekateo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.ExamPart;

public interface ExamPartRepository extends JpaRepository<ExamPart, Long>{

	ExamPart findById(Integer examPartId);

	Set<ExamPart> findAllByExam(Exam exam);

}
