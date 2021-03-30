package com.spring.projekateo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.projekateo.security.TokenUtils;

//Kontroler zaduzen za autentifikaciju korisnika
@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	TokenUtils tokenUtils;
	
	// Prvi endpoint koji pogadja korisnik kada se loguje.
	// Tada zna samo svoje korisnicko ime i lozinku i to prosledjuje na backend.
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Map<String, String> userCredentials) {

		 String username = userCredentials.get("username");
         String password = userCredentials.get("password");
         
         System.out.println(username + ' ' + password + " credentials");
         
         try {
 			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
 					username, password);
             Authentication authentication = authenticationManager.authenticate(token);
             UserDetails details = userDetailsService.loadUserByUsername(username);
             return new ResponseEntity<String>(tokenUtils.generateToken(details), HttpStatus.OK);
         } catch (Exception ex) {
             return new ResponseEntity<String>("Invalid login", HttpStatus.BAD_REQUEST);
         }
         
	}

}
