package com.spring.projekateo.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.repository.TeachingRepository;
import com.spring.projekateo.service.TeachingService;

@Service
public class TeachingServiceImpl implements TeachingService {
	
	@Autowired
    TeachingRepository teachingRepository;
	
	@Override
	public Teaching findById(Integer id) {
		return teachingRepository.findById(id);
	}
	
	@Override
    public Set<Teaching> getAllTeachingsByTeacher(Teacher teacher){
		Set<Teaching> allTeachings = teachingRepository.findAllByTeacher(teacher);
        return allTeachings;
	}
	
	@Override
    public Set<Teaching> getAllTeachingsByCourse(Course course){
		Set<Teaching> allTeachings = teachingRepository.findAllByCourse(course);
        return allTeachings;
	}
	
	@Override
	public Teaching save(Teaching teaching) {
		return teachingRepository.save(teaching);
	}
	
	@Override
	public void remove(Teaching teaching) {
		teachingRepository.delete(teaching);
	}
	
}

