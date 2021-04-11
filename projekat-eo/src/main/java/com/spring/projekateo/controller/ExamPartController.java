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

import com.spring.projekateo.dto.ExamPartDTO;
import com.spring.projekateo.dto.ExamPartStatusDTO;
import com.spring.projekateo.dto.ExamPartTypeDTO;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Exam;
import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.model.ExamPartType;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.ExamPartService;
import com.spring.projekateo.service.ExamPartTypeService;
import com.spring.projekateo.service.ExamService;
import com.spring.projekateo.service.StudentService;

@RestController
@RequestMapping(value = "/examParts", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamPartController {
	
	@Autowired
	private ExamService examService;
	
	@Autowired
	private ExamPartTypeService examPartTypeService;
	
	@Autowired
    private EnrollmentService enrollmentService;
	
	@Autowired
	private StudentService studentService;
	
	@Autowired
	private ExamPartService examPartService;
	
	@GetMapping("/getAllExamPartsByExam/{exam_id}")
	public ResponseEntity<List<ExamPartDTO>> getAllExamPartsByExam(@PathVariable("exam_id") int exam_id){
			Exam exam = examService.findById(exam_id);
		 	Set<ExamPart> examParts = examPartService.getAllExamPartsByExam(exam);
		 	List<ExamPartDTO> examPartsDTO = new ArrayList<>();
			for (ExamPart ep: examParts) {
				ExamPartDTO examPartDTO = new ExamPartDTO();
				examPartDTO.setId(ep.getId());
				examPartDTO.setPoints(ep.getPoints());
				examPartDTO.setDate(ep.getDate());
				examPartDTO.setLocation(ep.getLocation());
				examPartDTO.setStatus(new ExamPartStatusDTO(ep.getStatus()));
				examPartDTO.setType(new ExamPartTypeDTO(ep.getType()));
				//we leave exam field empty
				
				examPartsDTO.add(examPartDTO);
			}
			return new ResponseEntity<>(examPartsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllExamPartsByStudent/{student_id}")
	public ResponseEntity<List<ExamPartDTO>> getAllExamPartsByStudent(@PathVariable("student_id") int student_id){
			Student student = studentService.findById(student_id);
			Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
			List<ExamPartDTO> examPartsDTO = new ArrayList<>();
			for(Enrollment e : enrollments) {
				Set<Exam> exams = examService.getAllExamsByEnrollment(e);
				for (Exam ex: exams) {
					Set<ExamPart> examParts = examPartService.getAllExamPartsByExam(ex);
					for(ExamPart ep : examParts) {
						ExamPartDTO examPartDTO = new ExamPartDTO();
						examPartDTO.setId(ep.getId());
						examPartDTO.setPoints(ep.getPoints());
						examPartDTO.setDate(ep.getDate());
						examPartDTO.setLocation(ep.getLocation());
						examPartDTO.setStatus(new ExamPartStatusDTO(ep.getStatus()));
						examPartDTO.setType(new ExamPartTypeDTO(ep.getType()));
						//we leave exam field empty
						
						examPartsDTO.add(examPartDTO);
					}
				}
				
			}
			return new ResponseEntity<>(examPartsDTO, HttpStatus.OK);
	}
	
	@PostMapping("/addExamPart/{exam_id}/{exam_part_type_id}")
	public ResponseEntity<ExamPartDTO> createExamPart(@RequestBody ExamPartDTO newExamPart, @PathVariable("exam_id") int exam_id, @PathVariable("exam_part_type_id") int exam_part_type_id) {
		 
		Exam exam = examService.findById(exam_id);
		if (exam == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPartType examType = examPartTypeService.findById(exam_part_type_id);
		if (examType == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPart examPart = new ExamPart();
		examPart.setDate(newExamPart.getDate());
		examPart.setExam(exam);
		examPart.setLocation(newExamPart.getLocation());
		examPart.setType(examType);
				
		examPart = examPartService.save(examPart);
		return new ResponseEntity<ExamPartDTO>(new ExamPartDTO(examPart), HttpStatus.CREATED);	
	}
	
	@PutMapping("/updateExamPart/{exam_part_id}")
	public ResponseEntity<ExamPartDTO> updateExamPart(@RequestBody ExamPartDTO examPartDTO, @PathVariable("exam_part_id") int exam_part_id){
		//a exam part must exist
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		examPart.setPoints(examPartDTO.getPoints());
		examPart.setDate(examPartDTO.getDate());
		examPart.setLocation(examPartDTO.getLocation());

		examPart = examPartService.save(examPart);
		
		return new ResponseEntity<ExamPartDTO>(new ExamPartDTO(examPart), HttpStatus.OK);	
	}
	
	@PutMapping("/updateExamPartType/{exam_part_id}/{exam_part_type_id}")
	public ResponseEntity<ExamPartDTO> updateExamPartType(@RequestBody ExamPartDTO examPartDTO, @PathVariable("exam_part_id") int exam_part_id, @PathVariable("exam_part_type_id") int exam_part_type_id){
		//a exam part must exist
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPartType examType = examPartTypeService.findById(exam_part_type_id);
		if (examType == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		examPart.setType(examType);

		examPart = examPartService.save(examPart);
		
		return new ResponseEntity<ExamPartDTO>(new ExamPartDTO(examPart), HttpStatus.OK);	
	}
	
	@DeleteMapping("/deleteExamPart/{exam_part_id}")
	public ResponseEntity<Void> deleteExamPart(@PathVariable("exam_part_id") int exam_part_id){
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart != null){
			examPartService.remove(examPart);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {		
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}

}
