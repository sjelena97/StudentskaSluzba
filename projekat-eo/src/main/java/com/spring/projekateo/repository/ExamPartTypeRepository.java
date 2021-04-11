package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.ExamPartType;

public interface ExamPartTypeRepository extends JpaRepository<ExamPartType, Long>{

	ExamPartType findById(Integer id);

}
