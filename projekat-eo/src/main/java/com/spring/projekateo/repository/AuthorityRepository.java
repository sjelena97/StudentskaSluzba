package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long>{

	Authority findById(Integer authorityId);

	Authority findByName(String name);

}
