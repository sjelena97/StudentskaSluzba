package com.spring.projekateo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.ExamPeriod;
import com.spring.projekateo.model.Teaching;

public interface ExamRepository extends JpaRepository<Exam, Long>{

	Set<Exam> findAllByEnrollment(Enrollment enrollment);

	Exam findById(Integer id);

	Set<Exam> findAllByCourse(Course course);

	Set<Exam> findAllByPeriod(ExamPeriod examPeriod);

	Set<Exam> findAllByTeaching(Teaching teaching);

}
