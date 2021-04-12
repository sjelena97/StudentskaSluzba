package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.CourseDTO;
import com.spring.projekateo.dto.EnrollmentDTO;
import com.spring.projekateo.dto.ExamDTO;
import com.spring.projekateo.dto.ExamPeriodDTO;
import com.spring.projekateo.dto.TeachingDTO;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.ExamPeriod;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.service.CourseService;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.ExamPeriodService;
import com.spring.projekateo.service.ExamService;
import com.spring.projekateo.service.StudentService;
import com.spring.projekateo.service.TeacherService;
import com.spring.projekateo.service.TeachingService;

@RestController
@RequestMapping(value = "/exams", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamController {

	@Autowired
	private ExamService examService;
	
	@Autowired
	private ExamPeriodService examPeriodService;
	
	@Autowired
    private EnrollmentService enrollmentService;
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	private TeachingService teachingService;
	
	@Autowired
	private TeacherService teacherService;
	
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
	
	@GetMapping("/getAllExamsByCourse/{course_id}")
	public ResponseEntity<List<ExamDTO>> getAllExamsByCourse(@PathVariable("course_id") int course_id){
			Course course = courseService.findById(course_id);
		 	Set<Exam> exams = examService.getAllExamsByCourse(course);
		 	List<ExamDTO> examsDTO = new ArrayList<>();
			for (Exam e: exams) {
				ExamDTO examDTO = new ExamDTO();
				examDTO.setId(e.getId());
				examDTO.setPoints(e.getPoints());
				examDTO.setGrade(e.getGrade());
				examDTO.setTeaching(new TeachingDTO(e.getTeaching()));
				examDTO.setPeriod(new ExamPeriodDTO(e.getExamPeriod()));
				examDTO.setEnrollment(new EnrollmentDTO(e.getEnrollment()));
				//we leave course field empty
				
				examsDTO.add(examDTO);
			}
			return new ResponseEntity<>(examsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllExamsByExamPeriod/{exam_period_id}")
	public ResponseEntity<List<ExamDTO>> getAllExamsByExamPeriod(@PathVariable("exam_period_id") int exam_period_id){
			ExamPeriod period = examPeriodService.findById(exam_period_id);
		 	Set<Exam> exams = examService.getAllExamsByExamPeriod(period);
		 	List<ExamDTO> examsDTO = new ArrayList<>();
			for (Exam e: exams) {
				ExamDTO examDTO = new ExamDTO();
				examDTO.setId(e.getId());
				examDTO.setPoints(e.getPoints());
				examDTO.setGrade(e.getGrade());
				examDTO.setTeaching(new TeachingDTO(e.getTeaching()));
				examDTO.setCourse(new CourseDTO(e.getCourse()));
				examDTO.setEnrollment(new EnrollmentDTO(e.getEnrollment()));
				//we leave period field empty
				
				examsDTO.add(examDTO);
			}
			return new ResponseEntity<>(examsDTO, HttpStatus.OK);
	}
	

@GetMapping("/getAllExamsByTeaching/{teaching_id}")
	public ResponseEntity<List<ExamDTO>> getAllExamsByTeaching(@PathVariable("teaching_id") int teaching_id){
			Teaching teaching = teachingService.findById(teaching_id);
		 	Set<Exam> exams = examService.getAllExamsByTeaching(teaching);
		 	List<ExamDTO> examsDTO = new ArrayList<>();
			for (Exam e: exams) {
				ExamDTO examDTO = new ExamDTO();
				examDTO.setId(e.getId());
				examDTO.setPoints(e.getPoints());
				examDTO.setGrade(e.getGrade());
				examDTO.setEnrollment(new EnrollmentDTO(e.getEnrollment()));
				examDTO.setPeriod(new ExamPeriodDTO(e.getExamPeriod()));
				examDTO.setCourse(new CourseDTO(e.getCourse()));
				//we leave teaching field empty
				
				examsDTO.add(examDTO);
			}
			return new ResponseEntity<>(examsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllExamsByTeacher/{teacher_id}")
	public ResponseEntity<List<ExamDTO>> getAllExamsByTeacher(@PathVariable("teacher_id") int teacher_id){
			Teacher teacher = teacherService.findById(teacher_id);
			Set<Teaching> teachings = teachingService.getAllTeachingsByTeacher(teacher);
			List<ExamDTO> examsDTO = new ArrayList<>();
			for(Teaching t : teachings) {
				Set<Exam> exams = examService.getAllExamsByTeaching(t);
				for (Exam ex: exams) {
					ExamDTO examDTO = new ExamDTO();
					examDTO.setId(ex.getId());
					examDTO.setPoints(ex.getPoints());
					examDTO.setGrade(ex.getGrade());
					examDTO.setEnrollment(new EnrollmentDTO(ex.getEnrollment()));
					examDTO.setPeriod(new ExamPeriodDTO(ex.getExamPeriod()));
					examDTO.setCourse(new CourseDTO(ex.getCourse()));
					//we leave teaching field empty
					
					examsDTO.add(examDTO);
				}
				
			}
			return new ResponseEntity<>(examsDTO, HttpStatus.OK);
	}


	
	@PostMapping("/addExam/{course_id}/{exam_period_id}")
	public ResponseEntity<ExamDTO> createExam(@PathVariable("course_id") int course_id, @PathVariable("exam_period_id") int exam_period_id) {
		 
		Course course = courseService.findById(course_id);
		if (course == null) {
			return new ResponseEntity<ExamDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPeriod examPeriod = examPeriodService.findById(exam_period_id);
		if (examPeriod == null) {
			return new ResponseEntity<ExamDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Exam exam = new Exam();
		exam.setExamPeriod(examPeriod);
		exam.setCourse(course);
				
		exam = examService.save(exam);
		return new ResponseEntity<ExamDTO>(new ExamDTO(exam), HttpStatus.CREATED);	
	}
	
	@PutMapping("/updateExam/{exam_id}")
	public ResponseEntity<ExamDTO> updateExam(@RequestBody ExamDTO examDTO, @PathVariable("exam_id") int exam_id){
		//a exam must exist
		Exam exam = examService.findById(exam_id);
		if (exam == null) {
			return new ResponseEntity<ExamDTO>(HttpStatus.BAD_REQUEST);
		}
		
		exam.setGrade(examDTO.getGrade());
		exam.setPoints(examDTO.getPoints());

		exam = examService.save(exam);
		
		return new ResponseEntity<ExamDTO>(new ExamDTO(exam), HttpStatus.OK);	
	}
	
	@PutMapping("/updateExamPeriod/{exam_id}/{exam_period_id}")
	public ResponseEntity<ExamDTO> updateExamPeriod(@RequestBody ExamDTO examDTO, @PathVariable("exam_id") int exam_id, @PathVariable("exam_period_id") int exam_period_id){
		//a exam must exist
		Exam exam = examService.findById(exam_id);
		if (exam == null) {
			return new ResponseEntity<ExamDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPeriod examPeriod = examPeriodService.findById(exam_period_id);
		if (examPeriod == null) {
			return new ResponseEntity<ExamDTO>(HttpStatus.BAD_REQUEST);
		}
		
		exam.setPeriod(examPeriod);

		exam = examService.save(exam);
		
		return new ResponseEntity<ExamDTO>(new ExamDTO(exam), HttpStatus.OK);	
	}
	
	@DeleteMapping("/deleteExam/{exam_id}")
	public ResponseEntity<Void> deleteExam(@PathVariable("exam_id") int exam_id){
		Exam exam = examService.findById(exam_id);
		if (exam != null){
			examService.remove(exam);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {		
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}
	
}
