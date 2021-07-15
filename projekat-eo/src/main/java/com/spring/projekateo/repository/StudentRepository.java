package com.spring.projekateo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;

public interface StudentRepository extends PagingAndSortingRepository<Student, Long>, JpaRepository<Student, Long>{
	
	Student findById(Integer id);
	Student findByCardName(String cardName);
	Student findByUser(User user);
	
	 @Query(value = "select * from Student S join User U where S.user_id = U.user_id and S.active = true",
			  nativeQuery = true)
	Page<Student> getAll(Pageable page);
	
	 @Query(value = "select * from Student S join User U where S.user_id = U.user_id and S.active = true and (U.firstname like %:name% or U.lastname like %:name% or U.username like %:name% or U.email like %:name% or S.card_name like %:name%)",
			  nativeQuery = true)
	Page<Student> getAllByNameOrCardNameOrUserName(String name,Pageable page);

}
