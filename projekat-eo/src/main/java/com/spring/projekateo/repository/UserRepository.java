package com.spring.projekateo.repository;

import java.util.List;

import com.spring.projekateo.model.User;

public interface UserRepository {

	User save(User user);

	User findById(Integer id);

	List<User> findAll();

	User findByUsername(String username);

}
