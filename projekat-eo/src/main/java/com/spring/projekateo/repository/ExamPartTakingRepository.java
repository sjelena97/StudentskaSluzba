package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.model.ExamPartStatus;
import com.spring.projekateo.model.ExamPartTaking;

public interface ExamPartTakingRepository extends JpaRepository<ExamPartTaking, Long>{

	ExamPartTaking findById(Integer examPartTakingId);

	List<ExamPartTaking> findAllByPart(ExamPart examPart);

	List<ExamPartTaking> findAllByPartAndStatusNot(ExamPart examPart, ExamPartStatus status);

	List<ExamPartTaking> findAllByPartAndEnrollment(ExamPart examPart, Enrollment enrollment);

}
