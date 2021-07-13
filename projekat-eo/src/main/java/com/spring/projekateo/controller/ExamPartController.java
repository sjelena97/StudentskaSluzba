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
import com.spring.projekateo.dto.ExamPartTypeDTO;
import com.spring.projekateo.dto.ExamPeriodDTO;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.model.ExamPartStatus;
import com.spring.projekateo.model.ExamPartType;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.service.CourseService;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.ExamPartService;
import com.spring.projekateo.service.ExamPartStatusService;
import com.spring.projekateo.service.ExamPartTypeService;
import com.spring.projekateo.service.TeachingService;

@RestController
@RequestMapping(value = "/examParts", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamPartController {
	
	@Autowired
	private ExamPartTypeService examPartTypeService;
	
	@Autowired
	private ExamPartService examPartService;
	
	@Autowired
	private ExamPartStatusService examPartStatusService;
	
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
				if(ep.isActive()) {
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
			}
			return new ResponseEntity<>(partsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllExamPartsForEnrollment/{enrollment_id}")
	public ResponseEntity<List<ExamPartDTO>> getAllExamPartsForEnrollment(@PathVariable("enrollment_id") int id){
		Enrollment enrollment = enrollmentService.findById(id);
		Course course = enrollment.getCourse();
		System.out.println("dates: " + enrollment.getStartDate() + " " + enrollment.getEndDate());
		Set<ExamPart> parts = examPartService.getAllExamPartsByCourseAndDateBetween(course, enrollment.getStartDate(), enrollment.getEndDate());
		List<ExamPartDTO> partsDTO = new ArrayList<>();
			for (ExamPart ep: parts) {
				System.out.println("ima ispita");
				if(ep.isActive()) {
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
			}
			return new ResponseEntity<>(partsDTO, HttpStatus.OK);
	}

	@GetMapping("/getAllExamPartsForTeaching/{teaching_id}")
	public ResponseEntity<List<ExamPartDTO>> getAllExamPartsForTeaching(@PathVariable("teaching_id") int id){
		Teaching teaching = teachingService.findById(id);
		Course course = teaching.getCourse();
		System.out.println("dates: " + teaching.getStartDate() + " " + teaching.getEndDate());
		Set<ExamPart> parts = examPartService.getAllExamPartsByCourseAndDateBetween(course, teaching.getStartDate(), teaching.getEndDate());
		List<ExamPartDTO> partsDTO = new ArrayList<>();
			for (ExamPart ep: parts) {
				System.out.println("ima ispita");
				if(ep.isActive()) {
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
			}
			return new ResponseEntity<>(partsDTO, HttpStatus.OK);
	}
	
	@PostMapping("/addExamPart/{exam_id}/{exam_part_type_id}")
	public ResponseEntity<ExamPartDTO> createExamPart(@RequestBody ExamPartDTO newExamPart, @PathVariable("exam_id") int exam_id, @PathVariable("exam_part_type_id") int exam_part_type_id) {
		
		ExamPartType examType = examPartTypeService.findById(exam_part_type_id);
		if (examType == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPart examPart = new ExamPart();
		examPart.setDate(newExamPart.getDate());
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
	
	@PutMapping("/updateExamPartType/{exam_part_id}/{exam_part_type_code}")
	public ResponseEntity<ExamPartDTO> updateExamPartType(@RequestBody ExamPartDTO examPartDTO, @PathVariable("exam_part_id") int exam_part_id, @PathVariable("exam_part_type_code") String exam_part_type_code){
		//a exam part must exist
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPartType examType = examPartTypeService.findByCode(exam_part_type_code);
		if (examType == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}
		
		examPart.setType(examType);

		examPart = examPartService.save(examPart);
		
		return new ResponseEntity<ExamPartDTO>(new ExamPartDTO(examPart), HttpStatus.OK);	
	}
	
	@PutMapping("/updateExamPartStatus/{exam_part_id}/{exam_part_status_code}")
	public ResponseEntity<ExamPartDTO> updateExamPartStatus(@RequestBody ExamPartDTO examPartDTO,
			@PathVariable("exam_part_id") int exam_part_id,
			@PathVariable("exam_part_status_code") String exam_part_status_code) {
		// a exam part must exist
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}

		ExamPartStatus examStatus = examPartStatusService.findByCode(exam_part_status_code);
		if (examStatus == null) {
			return new ResponseEntity<ExamPartDTO>(HttpStatus.BAD_REQUEST);
		}

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
