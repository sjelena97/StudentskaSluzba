package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.TeachingType;
import com.spring.projekateo.repository.TeachingTypeRepository;
import com.spring.projekateo.service.TeachingTypeService;

@Service
public class TeachingTypeServiceImpl implements TeachingTypeService{
	
	@Autowired
	TeachingTypeRepository teachingTypeRepository;
	
	@Override
	public TeachingType findById(Integer typeId){
		return teachingTypeRepository.findById(typeId);
	}
	
	@Override
    public List<TeachingType> getAllTeachingTypes(){
		List<TeachingType> allTeachingTypes= teachingTypeRepository.findAll();
        return allTeachingTypes;
	}

}
