package com.spring.projekateo.controller;

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

import com.spring.projekateo.dto.UserDTO;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@GetMapping("getUserByUsername/{username}")
	public ResponseEntity<UserDTO> getUserByUsername(@PathVariable("username") String username) {
		User user = userService.findByUsername(username);
		if (user == null) {
			System.out.println("User is null");
			return new ResponseEntity<UserDTO>(HttpStatus.BAD_REQUEST);
		} else {
			System.out.println("user founded");
			return new ResponseEntity<UserDTO>(new UserDTO(user), HttpStatus.OK);
		}
	}

	@PutMapping("updateUser/{user_id}")
	public ResponseEntity<UserDTO> updateUser(@RequestBody UserDTO userDTO, @PathVariable("user_id") int id) {
	
		User user = userService.findById(id);
		if (user == null) {
			return new ResponseEntity<UserDTO>(HttpStatus.BAD_REQUEST);
		}
		if(!userDTO.getUsername().equalsIgnoreCase(user.getUsername())) {
			User user2 = userService.findByUsername(userDTO.getUsername());
			if(user2 != null) {
				return new ResponseEntity<UserDTO>(HttpStatus.BAD_REQUEST);
			}
		}
		
		user.setFirstName(userDTO.getFirstName());
		user.setLastName(userDTO.getLastName());
		user.setUsername(userDTO.getUsername());
		if(userDTO.getPassword() != null) {
			user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
		}
		
		user = userService.save(user);
		return new ResponseEntity<UserDTO>(new UserDTO(user), HttpStatus.OK);	
		
	}
	
	// Endpoint za dodavanje novog korisnika
	@PostMapping("/addUser")
	public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO newUser) {

		User existUser = this.userService.findByUsername(newUser.getUsername());
		if (existUser != null) {
			return new ResponseEntity<UserDTO>(HttpStatus.BAD_REQUEST);
		}
		User user = new User();
		user.setFirstName(newUser.getFirstName());
		user.setLastName(newUser.getLastName());
		user.setUsername(newUser.getUsername());
		// pre nego sto postavimo lozinku u atribut hesiramo je
		user.setPassword(passwordEncoder.encode(newUser.getPassword()));
		user = userService.save(user);
		return new ResponseEntity<UserDTO>(new UserDTO(user), HttpStatus.CREATED);	
	}
}