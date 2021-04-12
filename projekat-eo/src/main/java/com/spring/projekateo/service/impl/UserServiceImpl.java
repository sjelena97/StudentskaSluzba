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
	
	@Override
    public List<User> getAllUsers(){
		List<User> allUsers= userRepository.findAll();
        return allUsers;
	}

}
