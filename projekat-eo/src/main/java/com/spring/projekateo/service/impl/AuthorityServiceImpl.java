package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.Authority;
import com.spring.projekateo.repository.AuthorityRepository;
import com.spring.projekateo.service.AuthorityService;

@Service
public class AuthorityServiceImpl implements AuthorityService{
	
	@Autowired
	AuthorityRepository authorityRepository;
	
	@Override
	public Authority findById(Integer authorityId){
		return authorityRepository.findById(authorityId);
	}
	
	@Override
	public Authority findByName(String name){
		return authorityRepository.findByName(name);
	}

}
