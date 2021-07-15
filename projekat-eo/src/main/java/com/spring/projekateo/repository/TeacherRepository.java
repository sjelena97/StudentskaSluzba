package com.spring.projekateo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.User;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

	Teacher findById(Integer id);

	Teacher findByUser(User user);
	

	 @Query(value = "select * from Teacher T join User U where T.user_id = U.user_id and T.active = true",
			  nativeQuery = true)
	Page<Teacher> getAll(Pageable page);
	
	 @Query(value = "select * from Teacher T join  User U where T.user_id = U.user_id and T.active = true and (U.firstname like %:name% or U.lastname like %:name% or U.username like %:name% or U.email like %:name% )",
			  nativeQuery = true)
	Page<Teacher> getAllBySearch(String name,Pageable page);

}
