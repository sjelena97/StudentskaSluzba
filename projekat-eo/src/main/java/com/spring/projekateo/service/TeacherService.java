package com.spring.projekateo.service;

import com.spring.projekateo.model.Teacher;

public interface TeacherService {

	Teacher findById(Integer id);

	Teacher save(Teacher teacher);

}
