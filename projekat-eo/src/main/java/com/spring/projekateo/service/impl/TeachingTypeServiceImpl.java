package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.TeachingType;
import com.spring.projekateo.repository.TeachingTypeRepository;
import com.spring.projekateo.service.TeachingTypeService;

public class TeachingTypeServiceImpl implements TeachingTypeService{
	
	@Autowired
	TeachingTypeRepository teachingTypeRepository;
	
	@Override
	public TeachingType findById(Integer typeId){
		return teachingTypeRepository.findById(typeId);
	}

}
