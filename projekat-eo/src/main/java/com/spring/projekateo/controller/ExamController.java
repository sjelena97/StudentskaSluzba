package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.CourseDTO;
import com.spring.projekateo.dto.ExamDTO;
import com.spring.projekateo.dto.ExamPeriodDTO;
import com.spring.projekateo.dto.TeachingDTO;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.ExamService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/exams", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamController {

	@Autowired
	private ExamService examService;
	
	@Autowired
    private EnrollmentService enrollmentService;
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/getAllExamsByEnrollment/{enrollment_id}")
	public ResponseEntity<List<ExamDTO>> getAllExamsByEnrollment(@PathVariable("enrollment_id") int enrollment_id){
			Enrollment enrollment = enrollmentService.findById(enrollment_id);
		 	Set<Exam> exams = examService.getAllExamsByEnrollment(enrollment);
		 	List<ExamDTO> examsDTO = new ArrayList<>();
			for (Exam e: exams) {
				ExamDTO examDTO = new ExamDTO();
				examDTO.setId(e.getId());
				examDTO.setPoints(e.getPoints());
				examDTO.setGrade(e.getGrade());
				examDTO.setTeaching(new TeachingDTO(e.getTeaching()));
				examDTO.setPeriod(new ExamPeriodDTO(e.getExamPeriod()));
				examDTO.setCourse(new CourseDTO(e.getCourse()));
				//we leave enrollment field empty
				
				examsDTO.add(examDTO);
			}
			return new ResponseEntity<>(examsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllExamsByStudent/{student_id}")
	public ResponseEntity<List<ExamDTO>> getAllExamsByStudent(@PathVariable("student_id") int student_id){
			Student student = studentService.findById(student_id);
			Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
			List<ExamDTO> examsDTO = new ArrayList<>();
			for(Enrollment e : enrollments) {
				Set<Exam> exams = examService.getAllExamsByEnrollment(e);
				for (Exam ex: exams) {
					ExamDTO examDTO = new ExamDTO();
					examDTO.setId(ex.getId());
					examDTO.setPoints(ex.getPoints());
					examDTO.setGrade(ex.getGrade());
					examDTO.setTeaching(new TeachingDTO(ex.getTeaching()));
					examDTO.setPeriod(new ExamPeriodDTO(ex.getExamPeriod()));
					examDTO.setCourse(new CourseDTO(ex.getCourse()));
					//we leave enrollment field empty
					
					examsDTO.add(examDTO);
				}
				
			}
			return new ResponseEntity<>(examsDTO, HttpStatus.OK);
	}
	
}
