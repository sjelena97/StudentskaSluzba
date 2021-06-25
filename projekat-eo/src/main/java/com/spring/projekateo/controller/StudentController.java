package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.StudentDTO;
import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Authority;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.AccountService;
import com.spring.projekateo.service.AuthorityService;
import com.spring.projekateo.service.StudentService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/students", produces = MediaType.APPLICATION_JSON_VALUE)
public class StudentController {
	

	@Autowired
    private StudentService studentService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
    private AccountService accountService;
	
	@Autowired
    private AuthorityService authorityService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@GetMapping("/getAllStudents")
	public ResponseEntity<List<StudentDTO>> getAllStudents() {
		List<Student> students = studentService.getAllStudents();
		// convert students to DTOs
		List<StudentDTO> studentsDTO = new ArrayList<>();
		for (Student s : students) {
			if(s.isActive()) {
				studentsDTO.add(new StudentDTO(s));
			}
		}
		return new ResponseEntity<>(studentsDTO, HttpStatus.OK);
	}
	
	@GetMapping("getStudentById/{student_id}")
	public ResponseEntity<StudentDTO> getStudentById(@PathVariable("student_id") int student_id) {
		Student student = studentService.findById(student_id);
		if (student == null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<StudentDTO>(new StudentDTO(student), HttpStatus.OK);
		}
	}
	
	@GetMapping("getStudentByUsername/{username}")
	public ResponseEntity<StudentDTO> getStudentByUsername(@PathVariable("username") String username) {
		User user = userService.findByUsername(username);
		Student student = studentService.findByUser(user);
		if (student == null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<StudentDTO>(new StudentDTO(student), HttpStatus.OK);
		}
	}
	
	@PutMapping(value = "updateStudent/{student_id}")
	public ResponseEntity<StudentDTO> updateStudent(@RequestBody StudentDTO studentDTO , @PathVariable("student_id") int student_id) {
		Student student = studentService.findById(student_id);
		if (student == null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}
		if(!studentDTO.getCardName().equalsIgnoreCase(student.getCardName())) {
			Student student2 = studentService.findByCardName(studentDTO.getCardName());
			if(student2 != null) {
				return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
			}
		}
		if(!studentDTO.getUser().getUsername().equalsIgnoreCase(student.getUser().getUsername())) {
			User user2 = userService.findByUsername(studentDTO.getUser().getUsername());
			if(user2 != null) {
				return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
			}
		}
		
		student.setCardName(studentDTO.getCardName());
		student.setActive(studentDTO.isActive());
		
		User user = student.getUser();
		user.setFirstName(studentDTO.getUser().getFirstName());
		user.setLastName(studentDTO.getUser().getLastName());
		user.setUsername(studentDTO.getUser().getUsername());
		user.setEmail(studentDTO.getUser().getEmail());
		student.setUser(user);
		
		Account account = student.getAccount();
		account.setBankAccount(studentDTO.getAccount().getBankAccount());
		account.setModel(studentDTO.getAccount().getModel());
		account.setPersonalCallToNumber(studentDTO.getAccount().getPersonalCallToNumber());
		student.setAccount(account);
		
		student = studentService.save(student);
		return new ResponseEntity<StudentDTO>(new StudentDTO(student), HttpStatus.OK);	
	}
	
	@PostMapping("/addStudent")
	public ResponseEntity<StudentDTO> addStudent(@RequestBody StudentDTO newStudent) {
		
		User existUser = userService.findByUsername(newStudent.getUser().getUsername());
		if(existUser != null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Student existStudent = studentService.findByCardName(newStudent.getCardName());
		if(existStudent != null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Student student = new Student();
		student.setCardName(newStudent.getCardName());
		
		User user = new User();
		
		Authority authority = authorityService.findByName("STUDENT");
		if(authority == null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}
		user.setAuthority(authority);
		
		user.setFirstName(newStudent.getUser().getFirstName());
		user.setLastName(newStudent.getUser().getLastName());
		user.setUsername(newStudent.getUser().getUsername());
		user.setEmail(newStudent.getUser().getEmail());
		String defaultPassword = "student";
		// pre nego sto postavimo lozinku u atribut hesiramo je
		user.setPassword(passwordEncoder.encode(defaultPassword));
		
		user = userService.save(user);
		student.setUser(user);
		
		Account account = new Account();
		account.setBankAccount(newStudent.getAccount().getBankAccount());
		account.setModel(newStudent.getAccount().getModel());
		account.setPersonalCallToNumber(newStudent.getAccount().getPersonalCallToNumber());
		account = accountService.save(account);
		student.setAccount(account);
		
		student = studentService.save(student);
		return new ResponseEntity<StudentDTO>(new StudentDTO(student), HttpStatus.CREATED);	
	}
	
	@PutMapping("/deleteStudent/{student_id}")
	public ResponseEntity<Void> deleteStudent(@PathVariable("student_id") int student_id) {
		System.out.println("pozvana metoda delete student");
		Student student = studentService.findById(student_id);
		if (student != null){
			student.setActive(false);
			student = studentService.save(student);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} 		
		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		
	}

}
