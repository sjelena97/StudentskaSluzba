package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.ExamPartStatus;

public interface ExamPartStatusRepository extends JpaRepository<ExamPartStatus, Long>{

	ExamPartStatus findByCode(String code);

}
