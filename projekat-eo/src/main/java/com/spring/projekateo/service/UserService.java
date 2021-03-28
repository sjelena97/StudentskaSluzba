package com.spring.projekateo.service;

import java.util.List;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.spring.projekateo.model.User;

public interface UserService {

	User save(User user);

	User findById(Integer id);

	User add(User newUser);

	List<User> getAllUsers();

	User findByUsername(String username) throws UsernameNotFoundException;

}
