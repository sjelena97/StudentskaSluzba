package com.spring.projekateo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{

	List<Payment> findAllByAccount(Account account);

}
