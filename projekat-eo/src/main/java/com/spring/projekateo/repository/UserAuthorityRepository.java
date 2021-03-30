package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.UserAuthority;

public interface UserAuthorityRepository extends JpaRepository<UserAuthority, Long>{

	UserAuthority findById(Integer id);

}
