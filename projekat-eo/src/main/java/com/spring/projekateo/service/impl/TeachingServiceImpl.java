package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.Course;
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
	
	@Override
    public List<Teaching> getAllTeachingsByCourse(Course course){
		List<Teaching> allTeachings = teachingRepository.findAllByCourse(course);
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
	
	//teachingDTO
	@Override
	public Teaching add(Teaching newTeaching) {
		Teaching t = new Teaching();
		t.setStartDate(newTeaching.getStartDate());
		t.setEndDate(newTeaching.getEndDate());
		t.setCourse(newTeaching.getCourse());
		t.setTeacher(newTeaching.getTeacher());
		t.setType(newTeaching.getType());
		
		t = this.teachingRepository.save(t);
		return t;
	}
	
}

