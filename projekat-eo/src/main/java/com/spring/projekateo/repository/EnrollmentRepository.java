package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long>{

	List<Enrollment> findAllByStudent(Student student);

}
