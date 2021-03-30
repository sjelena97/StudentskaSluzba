package com.spring.projekateo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.User;
import com.spring.projekateo.repository.UserRepository;
import com.spring.projekateo.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public User findById(Integer id) {
		return userRepository.findById(id);
	}
	

	@Override
	public User findByUsername(String username) throws UsernameNotFoundException {
		User u = userRepository.findByUsername(username);
		return u;
	}
	
	
	
	@Override
	public User save(User user) {
		return userRepository.save(user);
	}
	
	//ovdje treba UserDTO a ne User
	@Override
	public User add(User newUser) {
		User u = new User();
		u.setFirstName(newUser.getFirstName());
		u.setLastName(newUser.getLastName());
		u.setUsername(newUser.getUsername());
		// prije nego sto postavimo lozinku u atribut hesiramo je
		u.setPassword(passwordEncoder.encode(newUser.getPassword())); 
		u.setUserAuthorities(newUser.getUserAuthorities());
		
		u = this.userRepository.save(u);
		return u;
	}
	
	@Override
    public List<User> getAllUsers(){
		List<User> allUsers= userRepository.findAll();
        return allUsers;
	}

}
