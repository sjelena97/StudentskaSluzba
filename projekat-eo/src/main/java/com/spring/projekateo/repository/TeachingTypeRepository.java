package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.TeachingType;

public interface TeachingTypeRepository extends JpaRepository<TeachingType, Long>{

	TeachingType findById(Integer teachingId);

}
