package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.TeachingType;

public interface TeachingTypeService {

	TeachingType findById(Integer teachingId);

	List<TeachingType> getAllTeachingTypes();

}
