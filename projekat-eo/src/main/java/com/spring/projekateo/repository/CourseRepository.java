package com.spring.projekateo.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.spring.projekateo.model.Course;

public interface CourseRepository extends PagingAndSortingRepository<Course, Long>, JpaRepository<Course, Long>{

	Course findById(Integer id);

	Course findByCode(String code);
		
	 @Query(value = "select * from projekateo.course",
			  nativeQuery = true)
	Page<Course> getAll(Pageable page);
	
	 @Query(value = "select * from projekateo.course where name like %:name% or espb like %:name%",
			  nativeQuery = true)
	Page<Course> getAllByNameLikeOrESPB(String name,Pageable page);
	

}