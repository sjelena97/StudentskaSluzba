package com.spring.projekateo.service;

import com.spring.projekateo.model.User;

public interface UserService {

	User save(User user);

	User findById(Integer id);

	User add(User newUser);

}
