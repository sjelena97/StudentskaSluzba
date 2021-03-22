package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long>{

	List<Exam> findAllByEnrollment(Enrollment enrollment);

	Exam findById(Integer id);

}
