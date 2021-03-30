package com.spring.projekateo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.dto.UserAuthorityDTO;
import com.spring.projekateo.model.Authority;
import com.spring.projekateo.model.User;
import com.spring.projekateo.model.UserAuthority;
import com.spring.projekateo.service.AuthorityService;
import com.spring.projekateo.service.UserAuthorityService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/userAuth", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserAuthorityController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthorityService authorityService;
	
	@Autowired
	private UserAuthorityService userAuthorityService;
	
	@PostMapping("/addUserAuthority/{user_id}/{authority_id}")
	public ResponseEntity<UserAuthorityDTO> addUserAuthority(@PathVariable("user_id") int user_id, @PathVariable("authority_id") int authority_id) {

		User user = userService.findById(user_id);
		if (user == null) {
			return new ResponseEntity<UserAuthorityDTO>(HttpStatus.BAD_REQUEST);
		}
		Authority authority = authorityService.findById(authority_id);
		if (authority == null) {
			return new ResponseEntity<UserAuthorityDTO>(HttpStatus.BAD_REQUEST);
		}
		
		UserAuthority userAuthority = new UserAuthority();
		userAuthority.setUser(user);
		userAuthority.setAuthority(authority);
		
		userAuthority = userAuthorityService.save(userAuthority);
		return new ResponseEntity<UserAuthorityDTO>(new UserAuthorityDTO(userAuthority), HttpStatus.CREATED);	
	}

}
