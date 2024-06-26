package com.spring.projekateo.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
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
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@Value("${dataDir}")
    private String dataDirPath;
	
	private Sort.Direction getSortDirection(String direction) {
	    if (direction.equals("asc")) {
	      return Sort.Direction.ASC;
	    } else if (direction.equals("desc")) {
	      return Sort.Direction.DESC;
	    }

	    return Sort.Direction.ASC;
	  }


	@GetMapping("/getAllStudents")
	public ResponseEntity<Map<String, Object>> getAllStudents(String username,
			@RequestParam(required = false) String search, @RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "3") int size, @RequestParam(defaultValue = "student_id,desc") String[] sort) {
		
		System.out.println("DOBIO SAM OVO " + search + " " + page + " " + size+ " " + sort);

		List<Student> students = new ArrayList<Student>();

		List<Order> orders = new ArrayList<Order>();

		if (sort[0].contains(",")) {
			// will sort more than 2 fields
			// sortOrder="field, direction"
			for (String sortOrder : sort) {
				String[] _sort = sortOrder.split(",");
				orders.add(new Order(getSortDirection(_sort[1]), _sort[0]));
			}
		} else {
			// sort=[field, direction]
			orders.add(new Order(getSortDirection(sort[1]), sort[0]));
		}

		Pageable paging = PageRequest.of(page, size, Sort.by(orders));

		Page<Student> pageTuts;
		if (search == null)
			pageTuts = studentService.getAllStudents(paging);
		else
			pageTuts = studentService.findByNameContaining(search, paging);

		students = pageTuts.getContent();

		// convert students to DTOs
		List<StudentDTO> studentsDTO = new ArrayList<>();
		for (Student s : students) {
				studentsDTO.add(new StudentDTO(s));
		}
		
		Map<String, Object> response = new HashMap<>();
		response.put("students", studentsDTO);
		response.put("currentPage", pageTuts.getNumber());
		response.put("totalItems", pageTuts.getTotalElements());
		response.put("totalPages", pageTuts.getTotalPages());

		
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@GetMapping("/getAllStudentsList")
	public ResponseEntity<List<StudentDTO>> getAllStudents() {
		List<Student> students = studentService.getAllStudentsList();
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
	public ResponseEntity<StudentDTO> updateStudent(@RequestBody StudentDTO studentDTO,
			@PathVariable("student_id") int student_id) {
		Student student = studentService.findById(student_id);
		if (student == null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}

		if (!studentDTO.getCardName().equalsIgnoreCase(student.getCardName())) {
			Student student2 = studentService.findByCardName(studentDTO.getCardName());
			if (student2 != null) {
				return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
			}
		}

		if (!studentDTO.getUser().getUsername().equalsIgnoreCase(student.getUser().getUsername())) {
			User user2 = userService.findByUsername(studentDTO.getUser().getUsername());
			if (user2 != null) {
				return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
			}
		}

		if (!studentDTO.getUser().getEmail().equalsIgnoreCase(student.getUser().getEmail())) {
			User user3 = userService.findByEmail(studentDTO.getUser().getEmail());
			if (user3 != null) {
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
		if (existUser != null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}

		User existUser2 = userService.findByEmail(newStudent.getUser().getEmail());
		if (existUser2 != null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}

		Student existStudent = studentService.findByCardName(newStudent.getCardName());
		if (existStudent != null) {
			return new ResponseEntity<StudentDTO>(HttpStatus.BAD_REQUEST);
		}

		Student student = new Student();
		student.setCardName(newStudent.getCardName());

		User user = new User();

		Authority authority = authorityService.findByName("STUDENT");
		if (authority == null) {
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
		
		String dirPath = dataDirPath + "/" + student.getUser().getUsername();
		File theDir = new File(dirPath);
		if (!theDir.exists()){
		    theDir.mkdirs();
		}
		
		return new ResponseEntity<StudentDTO>(new StudentDTO(student), HttpStatus.CREATED);
	}

	@PutMapping("/deleteStudent/{student_id}")
	public ResponseEntity<Void> deleteStudent(@PathVariable("student_id") int student_id) {
		System.out.println("pozvana metoda delete student");
		Student student = studentService.findById(student_id);
		if (student != null) {
			student.setActive(false);
			student = studentService.save(student);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);

	}

}