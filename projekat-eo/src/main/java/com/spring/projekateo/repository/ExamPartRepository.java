package com.spring.projekateo.repository;

import java.util.Date;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.ExamPart;

public interface ExamPartRepository extends JpaRepository<ExamPart, Long>{

	ExamPart findById(Integer examPartId);

	Set<ExamPart> findAllByCourse(Course course);

	Set<ExamPart> findAllByCourseAndDateBetween(Course course, Date startDate, Date endDate);

}
