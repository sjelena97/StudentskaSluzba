package com.spring.projekateo.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.projekateo.model.Account;
import com.spring.projekateo.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long>{

	Set<Payment> findAllByAccount(Account account);

}
