  
package com.spring.projekateo.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.User;

public interface TeacherService {

	Teacher findById(Integer id);

	Teacher save(Teacher teacher);

	Page<Teacher> getAllTeachers(Pageable pageable);

	Teacher findByUser(User user);

	Page<Teacher> findByNameContaining(String search, Pageable paging);
	
	List<Teacher> getAllTeachersList();


}