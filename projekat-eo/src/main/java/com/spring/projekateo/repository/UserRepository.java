package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User save(User user);

	User findById(Integer id);

	List<User> findAll();

	User findByUsername(String username);

}
