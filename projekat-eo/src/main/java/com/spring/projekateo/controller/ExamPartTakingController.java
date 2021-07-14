package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
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

import com.spring.projekateo.dto.EnrollmentDTO;
import com.spring.projekateo.dto.ExamPartStatusDTO;
import com.spring.projekateo.dto.ExamPartTakingDTO;
import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Authority;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.ExamPart;
import com.spring.projekateo.model.ExamPartStatus;
import com.spring.projekateo.model.ExamPartTaking;
import com.spring.projekateo.model.Payment;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.ExamPartService;
import com.spring.projekateo.service.ExamPartStatusService;
import com.spring.projekateo.service.ExamPartTakingService;
import com.spring.projekateo.service.PaymentService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/examPartTakings", produces = MediaType.APPLICATION_JSON_VALUE)
public class ExamPartTakingController {
	
	@Autowired
	private ExamPartTakingService examPartTakingService;
	
	@Autowired
	private ExamPartService examPartService;
	
	@Autowired
	private ExamPartStatusService examPartStatusService;
	
	@Autowired
	private EnrollmentService enrollmentService;
	
	@Autowired
    private UserService userService;
	
	@Autowired
    private PaymentService paymentService;
	
	@GetMapping("/getAllExamTakingsForUser/{username}/{exam_part_id}")
	public ResponseEntity<List<ExamPartTakingDTO>> getAllExamTakingsForUser(@PathVariable("username") String username, @PathVariable("exam_part_id") int exam_part_id){
			User user = userService.findByUsername(username);
			if (user == null) {
				return new ResponseEntity<List<ExamPartTakingDTO>>(HttpStatus.BAD_REQUEST);
			}
			
			ExamPart examPart = examPartService.findById(exam_part_id);
			if (examPart == null) {
				return new ResponseEntity<List<ExamPartTakingDTO>>(HttpStatus.BAD_REQUEST);
			}
			
			Authority authority = user.getAuthority();
			
			Set<ExamPartTaking> takings = new HashSet<ExamPartTaking>();
			if(authority.getName().equalsIgnoreCase("ADMIN")){
			 	List<ExamPartTaking> allTakings = examPartTakingService.getAllTakingsByPart(examPart);
			 	for (ExamPartTaking ept: allTakings) {
			 		takings.add(ept);
				}
			}else if(authority.getName().equalsIgnoreCase("TEACHER")) {
				ExamPartStatus status = examPartStatusService.findByCode("CLD");
				List<ExamPartTaking> allTakings = examPartTakingService.getAllTakingsByPartAndStatusNot(examPart, status);
			 	for (ExamPartTaking ept: allTakings) {
			 		takings.add(ept);
				}
			}
			
		 	List<ExamPartTakingDTO> takingsDTO = new ArrayList<>();
			for (ExamPartTaking ept: takings) {
				ExamPartTakingDTO examPartTakingDTO = new ExamPartTakingDTO();
				examPartTakingDTO.setId(ept.getId());
				examPartTakingDTO.setScore(ept.getScore());
				examPartTakingDTO.setStatus(new ExamPartStatusDTO(ept.getStatus()));
				examPartTakingDTO.setEnrollment(new EnrollmentDTO(ept.getEnrollment()));
				
				takingsDTO.add(examPartTakingDTO);
			}
			return new ResponseEntity<>(takingsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllExamTakingsForStudent/{exam_part_id}/{enrollment_id}")
	public ResponseEntity<List<ExamPartTakingDTO>> getAllExamTakingsForStudent(@PathVariable("exam_part_id") int exam_part_id, @PathVariable("enrollment_id") int enrollment_id){
			
			ExamPart examPart = examPartService.findById(exam_part_id);
			if (examPart == null) {
				return new ResponseEntity<List<ExamPartTakingDTO>>(HttpStatus.BAD_REQUEST);
			}
			
			Enrollment enrollment = enrollmentService.findById(enrollment_id);
			if (enrollment == null) {
				return new ResponseEntity<List<ExamPartTakingDTO>>(HttpStatus.BAD_REQUEST);
			}
			
			Set<ExamPartTaking> takings = new HashSet<ExamPartTaking>();

			List<ExamPartTaking> allTakings = examPartTakingService.getAllTakingsByPartAndEnrollment(examPart, enrollment);
		 	for (ExamPartTaking ept: allTakings) {
		 		takings.add(ept);
			}
			
		 	List<ExamPartTakingDTO> takingsDTO = new ArrayList<>();
			for (ExamPartTaking ept: takings) {
				ExamPartTakingDTO examPartTakingDTO = new ExamPartTakingDTO();
				examPartTakingDTO.setId(ept.getId());
				examPartTakingDTO.setScore(ept.getScore());
				examPartTakingDTO.setStatus(new ExamPartStatusDTO(ept.getStatus()));
				examPartTakingDTO.setEnrollment(new EnrollmentDTO(ept.getEnrollment()));
				
				takingsDTO.add(examPartTakingDTO);
			}
			return new ResponseEntity<>(takingsDTO, HttpStatus.OK);
	}
	
	@GetMapping("getExamTakingById/{exam_taking_id}")
	public ResponseEntity<ExamPartTakingDTO> getExamTakingById(@PathVariable("exam_taking_id") int exam_taking_id) {
		ExamPartTaking ept = examPartTakingService.findById(exam_taking_id);
		if (ept == null) {
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<ExamPartTakingDTO>(new ExamPartTakingDTO(ept), HttpStatus.OK);
		}
	}
	
	@PutMapping("/updateExamTaking/{exam_taking_id}")
	public ResponseEntity<ExamPartTakingDTO> updateExamPartTaking(@RequestBody ExamPartTakingDTO examPartTakingDTO, @PathVariable("exam_taking_id") int exam_taking_id){
		//a exam taking must exist
		ExamPartTaking examPartTaking = examPartTakingService.findById(exam_taking_id);
		if (examPartTaking == null) {
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPartStatus status = examPartStatusService.findById(examPartTakingDTO.getStatus().getId());
		if (status == null) {
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		examPartTaking.setScore(examPartTakingDTO.getScore());
		examPartTaking.setStatus(status);

		examPartTaking = examPartTakingService.save(examPartTaking);
		
		return new ResponseEntity<ExamPartTakingDTO>(new ExamPartTakingDTO(examPartTaking), HttpStatus.OK);	
	}
	
	@GetMapping("canSignUp/{exam_part_id}/{enrollment_id}")
	public ResponseEntity<Boolean> canSignUpExam(@PathVariable("exam_part_id") int exam_part_id, @PathVariable("enrollment_id") int enrollment_id) {
		
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart == null) {
			return new ResponseEntity<Boolean>(HttpStatus.BAD_REQUEST);
		}
		
		Enrollment enrollment = enrollmentService.findById(enrollment_id);
		if (enrollment == null) {
			return new ResponseEntity<Boolean>(HttpStatus.BAD_REQUEST);
		}
		
		Date today = new Date();
		
		if(examPart.getDate().before(today)) {
			System.out.println("datum ispita je prosao");
			return new ResponseEntity<Boolean>(Boolean.FALSE, HttpStatus.OK);
		}
		
		ExamPartStatus status = examPartStatusService.findByCode("RGD");
		ExamPartTaking taking = examPartTakingService.getTakingByPartAndStatusAndEnrollment(examPart, status, enrollment);
	 	if(taking == null) {
	 		System.out.println("can sign up");
	 		return new ResponseEntity<Boolean>(Boolean.TRUE, HttpStatus.OK);
	 	}
	 	System.out.println("cant sign up");
	 	return new ResponseEntity<Boolean>(Boolean.FALSE, HttpStatus.OK);
	}
	
	@GetMapping("canSignOut/{exam_part_id}/{enrollment_id}")
	public ResponseEntity<Boolean> canSignOutExam(@PathVariable("exam_part_id") int exam_part_id, @PathVariable("enrollment_id") int enrollment_id) {
		
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart == null) {
			return new ResponseEntity<Boolean>(HttpStatus.BAD_REQUEST);
		}
		
		Enrollment enrollment = enrollmentService.findById(enrollment_id);
		if (enrollment == null) {
			return new ResponseEntity<Boolean>(HttpStatus.BAD_REQUEST);
		}
		
		Date today = new Date();
		
		if(examPart.getDate().before(today)) {
			System.out.println("datum ispita je prosao");
			return new ResponseEntity<Boolean>(Boolean.FALSE, HttpStatus.OK);
		}
		
		ExamPartStatus status = examPartStatusService.findByCode("RGD");
		ExamPartTaking taking = examPartTakingService.getTakingByPartAndStatusAndEnrollment(examPart, status, enrollment);
	 	if(taking == null) {
	 		System.out.println("cant sign out");
	 		return new ResponseEntity<Boolean>(Boolean.FALSE, HttpStatus.OK);
	 	}
	 	System.out.println("can sign out");
	 	return new ResponseEntity<Boolean>(Boolean.TRUE, HttpStatus.OK);
	}
	
	@PostMapping("signUp/{exam_part_id}/{enrollment_id}")
	public ResponseEntity<ExamPartTakingDTO> signUp(@PathVariable("exam_part_id") int exam_part_id, @PathVariable("enrollment_id") int enrollment_id) {
	
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart == null) {
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Enrollment enrollment = enrollmentService.findById(enrollment_id);
		if (enrollment == null) {
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Date today = new Date();
		
		if(examPart.getDate().before(today)) {
			System.out.println("datum ispita je prosao");
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPartStatus statusRGD = examPartStatusService.findByCode("RGD");
		ExamPartTaking taking = examPartTakingService.getTakingByPartAndStatusAndEnrollment(examPart, statusRGD, enrollment);
	 	if(taking != null) {
	 		System.out.println("cant sign up, already registred");
	 		return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
	 	}
	 	
	 	Account account = enrollment.getStudent().getAccount();
	 	
	 	double available = 0;
		Set<Payment> payments = paymentService.getAllPaymentsByAccount(account);
		for(Payment p : payments) {
			available+= p.getAmount();
		}
		available-= 200;
		if(available < 0) {
			System.out.println("Not enough funds");
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		Payment payment = new Payment();
		payment.setAmount(-200);
		payment.setDate(today);
		payment.setPurpose("prijava ispita");
		payment.setAccount(account);
		
		payment = paymentService.save(payment);
		
		ExamPartStatus statusCLD = examPartStatusService.findByCode("CLD");
		ExamPartTaking takingCld = examPartTakingService.getTakingByPartAndStatusAndEnrollment(examPart, statusCLD, enrollment);
		if(takingCld != null) {
			takingCld.setStatus(statusRGD);
			takingCld = examPartTakingService.save(takingCld);
			return new ResponseEntity<ExamPartTakingDTO>(new ExamPartTakingDTO(takingCld), HttpStatus.OK);

		}else {
			ExamPartTaking ept = new ExamPartTaking();
		 	ept.setScore(0);
		 	ept.setStatus(statusRGD);
		 	ept.setPart(examPart);
		 	ept.setEnrollment(enrollment);
		 	
		 	ept = examPartTakingService.save(ept);
		 	return new ResponseEntity<ExamPartTakingDTO>(new ExamPartTakingDTO(ept), HttpStatus.OK);
		}
	}

	@PutMapping("signOut/{exam_part_id}/{enrollment_id}")
	public ResponseEntity<ExamPartTakingDTO> signOut(@PathVariable("exam_part_id") int exam_part_id, @PathVariable("enrollment_id") int enrollment_id) {
	
		ExamPart examPart = examPartService.findById(exam_part_id);
		if (examPart == null) {
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Enrollment enrollment = enrollmentService.findById(enrollment_id);
		if (enrollment == null) {
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Date today = new Date();
		
		if(examPart.getDate().before(today)) {
			System.out.println("datum ispita je prosao");
			return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
		}
		
		ExamPartStatus statusRGD = examPartStatusService.findByCode("RGD");
		ExamPartTaking taking = examPartTakingService.getTakingByPartAndStatusAndEnrollment(examPart, statusRGD, enrollment);
	 	if(taking == null) {
	 		System.out.println("cant sign out, not registred");
	 		return new ResponseEntity<ExamPartTakingDTO>(HttpStatus.BAD_REQUEST);
	 	}
	 	
	 	Account account = enrollment.getStudent().getAccount();
	 	
		Payment payment = new Payment();
		payment.setAmount(200);
		payment.setDate(today);
		payment.setPurpose("odjava ispita");
		payment.setAccount(account);
		
		payment = paymentService.save(payment);
		
		ExamPartStatus statusCLD = examPartStatusService.findByCode("CLD");
		taking.setStatus(statusCLD);
	 	
		taking = examPartTakingService.save(taking);
	 	return new ResponseEntity<ExamPartTakingDTO>(new ExamPartTakingDTO(taking), HttpStatus.OK);
	}

}
