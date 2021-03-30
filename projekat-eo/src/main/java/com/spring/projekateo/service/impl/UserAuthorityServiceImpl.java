package com.spring.projekateo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.projekateo.model.UserAuthority;
import com.spring.projekateo.repository.UserAuthorityRepository;
import com.spring.projekateo.service.UserAuthorityService;

@Service
public class UserAuthorityServiceImpl implements UserAuthorityService{
	
	@Autowired
    UserAuthorityRepository userAuthorityRepository;
	
	@Override
	public UserAuthority findById(Integer id) {
		return userAuthorityRepository.findById(id);
	}
	
	@Override
	public UserAuthority save(UserAuthority userAuthority) {
		return userAuthorityRepository.save(userAuthority);
	}

}
