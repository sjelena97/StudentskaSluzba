package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.spring.projekateo.model.User;
import com.spring.projekateo.repository.UserRepository;
import com.spring.projekateo.service.UserService;

public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User findById(Integer id) {
		return userRepository.findById(id);
	}
	
	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

}
