package com.spring.projekateo.service;

import java.util.List;

import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;

public interface TeachingService {

	List<Teaching> getAllTeachingsByTeacher(Teacher teacher);

}
