package com.spring.projekateo.service;

import com.spring.projekateo.model.ExamPartStatus;

public interface ExamPartStatusService {

	ExamPartStatus findByCode(String code);

}
