package com.spring.projekateo.service;

import com.spring.projekateo.model.UserAuthority;

public interface UserAuthorityService {

	UserAuthority findById(Integer id);

	UserAuthority save(UserAuthority userAuthority);

}
