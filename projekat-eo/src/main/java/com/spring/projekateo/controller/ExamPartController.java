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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.ExamPartDTO;
import com.spring.projekateo.dto.ExamPartTypeDTO;
import com.spring.projekateo.dto.ExamPeriodDTO;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.model.ExamPartType;
import com.spring.projekateo.model.ExamPeriod;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.service.CourseService;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.ExamPartService;
import com.spring.projekateo.service.ExamPartTypeService;
import com.spring.projekateo.service.ExamPeriodService;
import com.spring.projekateo.service.TeachingService;

@RestController
@RequestMapping(value = "/examParts", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamPartController {
	
	@Autowired
	private ExamPartService examPartService;
	
	@Autowired
	private ExamPartTypeService examPartTypeService;
	
	@Autowired
	private ExamPeriodService examPeriodService;
	
	@Autowired
	private CourseService courseService;
	
	@Autowired
	private EnrollmentService enrollmentService;
	
	@Autowired
	private TeachingService teachingService;
	
	@GetMapping("/getAllExamPartsForCourse/{course_id}")
	public ResponseEntity<List<ExamPartDTO>> getAllExamPartsForCourse(@PathVariable("course_id") int id){
		Course course = courseService.findById(id);
		Set<ExamPart> parts = examPartService.getAllExamPartsByCourse(course);
		List<ExamPartDTO> partsDTO = new ArrayList<>();
			for (ExamPart ep: parts) {
					ExamPartDTO partDTO = new ExamPartDTO();
					partDTO.setId(ep.getId());
					partDTO.setPoints(ep.getPoints());
					partDTO.setDate(ep.getDate());
					partDTO.setLocation(ep.getLocation());
					partDTO.setPeriod(new ExamPeriodDTO(ep.getPeriod()));
					partDTO.setType(new ExamPartTypeDTO(ep.getType()));
					partDTO.setActive(ep.isActive());
					
					partsDTO.add(partDTO);
			}
			return new ResponseEntity<>(partsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllExamPartsForEnrollment/{enrollment_id}")
	public ResponseEntity<List<ExamPartDTO>> getAllExamPartsForEnrollment(@PathVariable("enrollment_id") int id){
		Enrollment enrollment = enrollmentService.findById(id);
		Course course = enrollment.getCourse();
		Set<ExamPart> parts = examPartService.getAllExamPartsByCourseAndDateBetween(course, enrollment.getStartDate(), enrollment.getEndDate());
		List<ExamPartDTO> partsDTO = new ArrayList<>();
			for (ExamPart ep: parts) {
					ExamPartDTO partDTO = new ExamPartDTO();
					partDTO.setId(ep.getId());
					partDTO.setPoints(ep.getPoints());
					partDTO.setDate(ep.getDate());
					partDTO.setLocation(ep.getLocation());
					partDTO.setPeriod(new ExamPeriodDTO(ep.getPeriod()));
					partDTO.setType(new ExamPartTypeDTO(ep.getType()));
					partDTO.setActive(ep.isActive());
					
					partsDTO.add(partDTO);
			}
			return new ResponseEntity<>(partsDTO, HttpStatus.OK);
	}

	@GetMapping("/getAllExamPartsForTeaching/{teaching_id}")
	public ResponseEntity<List<ExamPartDTO>> getAllExamPartsForTeaching(@PathVariable("teaching_id") int id){
		Teaching teaching = teachingService.findById(id);
		Course course = teaching.getCourse();
		Set<ExamPart> parts = examPartService.getAllExamPartsByCourseAndDateBetween(course, teaching.getStartDate(), teaching.getEndDate());
		List<ExamPartDTO> partsDTO = new ArrayList<>();
			for (ExamPart ep: parts) {
					ExamPartDTO partDTO = new ExamPartDTO();
					partDTO.setId(ep.getId());
					partDTO.setPoints(ep.getPoints());
					partDTO.setDate(ep.getDate());
					partDTO.setLocation(ep.getLocation());
					partDTO.setPeriod(new ExamPeriodDTO(ep.getPeriod()));
					partDTO.setType(new ExamPartTypeDTO(ep.getType()));
					partDTO.setActive(ep.isActive());
					
					partsDTO.add(partDTO);
			}
			return new ResponseEntity<>(partsDTO, HttpStatus.OK);
	}
	
	@GetMapping("getExamPartById/{exam_part_id}")
	public ResponseEntity<ExamPartDTO> getExamPartById(@PathVariable("exam_part_id") int exam_part_id) {
		ExamPart ep = examPartService.findById(exam_part_id);
		if (ep == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<ExamPartDTO>(new ExamPartDTO(ep), HttpStatus.OK);
		}
	}
	
	
	@PostMapping("/addExamPart")
	public ResponseEntity<ExamPartDTO> createExamPart(@RequestBody ExamPartDTO newExamPart) {
		
		ExamPartType examType = examPartTypeService.findById(newExamPart.getType().getId());
		if (examType == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPeriod examPeriod = examPeriodService.findById(newExamPart.getPeriod().getId());
		if (examPeriod == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Course course = courseService.findById(newExamPart.getCourse().getId());
		if (course == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPart examPart = new ExamPart();
		examPart.setDate(newExamPart.getDate());
		examPart.setLocation(newExamPart.getLocation());
		examPart.setPoints(newExamPart.getPoints());
		examPart.setType(examType);
		examPart.setPeriod(examPeriod);
		examPart.setCourse(course);
		examPart.setActive(newExamPart.isActive());
				
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
		
		ExamPartType examType = examPartTypeService.findById(examPartDTO.getType().getId());
		if (examType == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPeriod examPeriod = examPeriodService.findById(examPartDTO.getPeriod().getId());
		if (examPeriod == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Course course = courseService.findById(examPartDTO.getCourse().getId());
		if (course == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		examPart.setPoints(examPartDTO.getPoints());
		examPart.setDate(examPartDTO.getDate());
		examPart.setLocation(examPartDTO.getLocation());
		examPart.setType(examType);
		examPart.setPeriod(examPeriod);
		examPart.setCourse(course);
		examPart.setActive(examPartDTO.isActive());

		examPart = examPartService.save(examPart);
		
		return new ResponseEntity<ExamPartDTO>(new ExamPartDTO(examPart), HttpStatus.OK);	
	}

}
