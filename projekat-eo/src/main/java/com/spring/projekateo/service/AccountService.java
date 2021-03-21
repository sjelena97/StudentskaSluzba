package com.spring.projekateo.service;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Student;

public interface AccountService {

	Account findById(Integer accountId);

	Account findAccountByStudent(Student student);

}
