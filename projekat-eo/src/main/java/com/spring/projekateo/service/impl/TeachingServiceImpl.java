package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.repository.TeachingRepository;
import com.spring.projekateo.service.TeachingService;

public class TeachingServiceImpl implements TeachingService {
	
	@Autowired
    TeachingRepository teachingRepository;
	
	@Override
    public List<Teaching> getAllTeachingsByTeacher(Teacher teacher){
		List<Teaching> allTeachings = teachingRepository.findAllByTeacher(teacher);
        return allTeachings;
	}
	
}

