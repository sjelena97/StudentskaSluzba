package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.Student;

public interface ExamRepository extends JpaRepository<Exam, Long>{

	List<Exam> findAllByStudent(Student student);

}
