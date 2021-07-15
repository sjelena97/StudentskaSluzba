package com.spring.projekateo.service.impl;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.repository.CourseRepository;
import com.spring.projekateo.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseRepository courseRepository;
		
	@Override
	public Course findById(Integer id) {
		return courseRepository.findById(id);
	}
	
	@Override
	public Course findCourseByCode(String code) {
		return courseRepository.findByCode(code);
	}
	
	@Override
	public Course save(Course course) {
		return courseRepository.save(course);
	}
	
	@Override
    public List<Course> getAllCourses(){
		List<Course> allCourses= courseRepository.findAll();
        return allCourses;
	}

	@Override
	public Page<Course> findAll(Pageable paging) {
		return courseRepository.getAll(paging);
	}

	@Override
	public Page<Course> findByNameContaining(String name, Pageable paging) {
		return courseRepository.getAllByNameLikeOrESPB(name, paging);
	}
	

}
