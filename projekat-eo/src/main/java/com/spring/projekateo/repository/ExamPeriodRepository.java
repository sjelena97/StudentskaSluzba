package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.ExamPeriod;

public interface ExamPeriodRepository extends JpaRepository<ExamPeriod, Long>{

	ExamPeriod findById(Integer examPeriodId);

}
