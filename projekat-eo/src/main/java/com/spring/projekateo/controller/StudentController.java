package com.spring.projekateo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.StudentDTO;
import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.StudentService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/students", produces = MediaType.APPLICATION_JSON_VALUE)
public class StudentController {
	

	@Autowired
    private StudentService studentService;
	
	@Autowired
	private UserService userService;
	
	@PutMapping(value = "updateStudent/{student_id}")
	public ResponseEntity<StudentDTO> updateStudent(@RequestBody StudentDTO studentDTO , @PathVariable("student_id") int id) {
		
		
		Student student = studentService.findById(id);
		if (student == null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}
		if(!studentDTO.getCardName().equalsIgnoreCase(student.getCardName())) {
			Student student2 = studentService.findByCardName(studentDTO.getCardName());
			if(student2 != null) {
				return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
			}
		}
		
		student.setCardName(studentDTO.getCardName());
		student.setActive(studentDTO.isActive());
		student = studentService.save(student);
		return new ResponseEntity<StudentDTO>(new StudentDTO(student), HttpStatus.OK);	
		 
	}
	
	@PostMapping("/addStudent/{user_id}")
	public ResponseEntity<StudentDTO> addStudent(@RequestBody StudentDTO newStudent, @PathVariable("user_id") int user_id) {

		User user = userService.findById(user_id);
		if (user == null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}
		Student student = new Student();
		student.setCardName(newStudent.getCardName());
		student.setUser(user);
		Account account = new Account();
		account.setBalance(0);
		student.setAccount(account);
		student = studentService.save(student);
		return new ResponseEntity<StudentDTO>(new StudentDTO(student), HttpStatus.CREATED);	
	}

}
