package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.spring.projekateo.dto.TeacherDTO;
import com.spring.projekateo.model.Authority;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.AuthorityService;
import com.spring.projekateo.service.TeacherService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/teachers", produces = MediaType.APPLICATION_JSON_VALUE)
public class TeacherController {
	
	@Autowired
    private TeacherService teacherService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
    private AuthorityService authorityService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	private Sort.Direction getSortDirection(String direction) {
	    if (direction.equals("asc")) {
	      return Sort.Direction.ASC;
	    } else if (direction.equals("desc")) {
	      return Sort.Direction.DESC;
	    }

	    return Sort.Direction.ASC;
	  }
	
	
	@GetMapping("/getAllTeachers")
	public ResponseEntity<Map<String,Object>> getAllTeachers(String username,
			@RequestParam(required = false) String search, @RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "3") int size, @RequestParam(defaultValue = "teacher_id,desc") String[] sort) {
		
		
		
		List<Teacher> teachers = new ArrayList<Teacher>();
		// convert teachers to DTOs
		
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

		Page<Teacher> pageTuts;
		if (search == null)
			pageTuts = teacherService.getAllTeachers(paging);
		else
			pageTuts = teacherService.findByNameContaining(search, paging);

		teachers = pageTuts.getContent();
		
		List<TeacherDTO> teachersDTO = new ArrayList<>();
		for (Teacher t : teachers) {
				teachersDTO.add(new TeacherDTO(t));
		}
		
		Map<String, Object> response = new HashMap<>();
		response.put("teachers", teachersDTO);
		response.put("currentPage", pageTuts.getNumber());
		response.put("totalItems", pageTuts.getTotalElements());
		response.put("totalPages", pageTuts.getTotalPages());

		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	
	@GetMapping("/getAllTeachersList")
	public ResponseEntity<List<TeacherDTO>> getAllTeachers() {
		List<Teacher> teachers = teacherService.getAllTeachersList();
		// convert teachers to DTOs
		List<TeacherDTO> teachersDTO = new ArrayList<>();
		for (Teacher t : teachers) {
			if(t.isActive()) {
				teachersDTO.add(new TeacherDTO(t));
			}
		}
		return new ResponseEntity<>(teachersDTO, HttpStatus.OK);
	}

	
	@GetMapping("getTeacherById/{teacher_id}")
	public ResponseEntity<TeacherDTO> getTeacherById(@PathVariable("teacher_id") int teacher_id) {
		Teacher teacher = teacherService.findById(teacher_id);
		if (teacher == null) {
			return new ResponseEntity<TeacherDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<TeacherDTO>(new TeacherDTO(teacher), HttpStatus.OK);
		}
	}
	
	@PutMapping(value = "updateTeacher/{teacher_id}")
	public ResponseEntity<TeacherDTO> updateTeacher(@RequestBody TeacherDTO teacherDTO , @PathVariable("teacher_id") int teacher_id) {
		
		Teacher teacher = teacherService.findById(teacher_id);
		if (teacher == null) {
			return new ResponseEntity<TeacherDTO>(HttpStatus.BAD_REQUEST);
		}
		
		if(!teacherDTO.getUser().getUsername().equalsIgnoreCase(teacher.getUser().getUsername())) {
			User user2 = userService.findByUsername(teacherDTO.getUser().getUsername());
			if(user2 != null) {
				return new ResponseEntity<TeacherDTO>(HttpStatus.BAD_REQUEST);
			}
		}
		
		if(!teacherDTO.getUser().getEmail().equalsIgnoreCase(teacher.getUser().getEmail())) {
			User user3 = userService.findByEmail(teacherDTO.getUser().getEmail());
			if(user3 != null) {
				return new ResponseEntity<TeacherDTO>(HttpStatus.BAD_REQUEST);
			}
		}
		
		teacher.setActive(teacherDTO.isActive());
		
		User user = teacher.getUser();
		user.setFirstName(teacherDTO.getUser().getFirstName());
		user.setLastName(teacherDTO.getUser().getLastName());
		user.setUsername(teacherDTO.getUser().getUsername());
		user.setEmail(teacherDTO.getUser().getEmail());
		teacher.setUser(user);
		
		teacher = teacherService.save(teacher);
		return new ResponseEntity<TeacherDTO>(new TeacherDTO(teacher), HttpStatus.OK);	
		
	}
	
	@PostMapping("/addTeacher")
	public ResponseEntity<TeacherDTO> addTeacher(@RequestBody TeacherDTO newTeacher) {

		User existUser = userService.findByUsername(newTeacher.getUser().getUsername());
		if(existUser != null) {
			return new ResponseEntity<TeacherDTO>(HttpStatus.BAD_REQUEST);
		}
		
		User existUser2 = userService.findByEmail(newTeacher.getUser().getEmail());
		if(existUser2 != null) {
			return new ResponseEntity<TeacherDTO>(HttpStatus.BAD_REQUEST);
		}
		
		Teacher teacher = new Teacher();
		
		User user = new User();
		
		Authority authority = authorityService.findByName("TEACHER");
		if(authority == null) {
			return new ResponseEntity<TeacherDTO>(HttpStatus.BAD_REQUEST);
		}
		user.setAuthority(authority);
		
		user.setFirstName(newTeacher.getUser().getFirstName());
		user.setLastName(newTeacher.getUser().getLastName());
		user.setUsername(newTeacher.getUser().getUsername());
		user.setEmail(newTeacher.getUser().getEmail());
		String defaultPassword = "teacher";
		// pre nego sto postavimo lozinku u atribut hesiramo je
		user.setPassword(passwordEncoder.encode(defaultPassword));
		
		user = userService.save(user);
		teacher.setUser(user);
		
		teacher = teacherService.save(teacher);
		return new ResponseEntity<TeacherDTO>(new TeacherDTO(teacher), HttpStatus.CREATED);	
		
	}
	
	@PutMapping("/deleteTeacher/{teacher_id}")
	public ResponseEntity<Void> deleteTeacher(@PathVariable("teacher_id") int teacher_id) {
		Teacher teacher = teacherService.findById(teacher_id);
		if (teacher != null){
			teacher.setActive(false);
			teacher = teacherService.save(teacher);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}		
		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		
	}
}