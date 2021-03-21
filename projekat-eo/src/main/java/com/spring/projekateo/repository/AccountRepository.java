package com.spring.projekateo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Student;


public interface AccountRepository extends JpaRepository<Account, Long>{

	Account findById(Integer accountId);

	Account findByStudent(Student student);

}
