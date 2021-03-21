package com.spring.projekateo.repository;

import com.spring.projekateo.model.User;

public interface UserRepository {

	User save(User user);

	User findById(Integer id);

}
