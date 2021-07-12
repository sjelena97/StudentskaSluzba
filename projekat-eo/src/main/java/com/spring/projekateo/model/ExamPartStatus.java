package com.spring.projekateo.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "exam_part_status")
public class ExamPartStatus {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="exam_part_status_id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "name", nullable=false)
	private String name;
	
	@Column(name = "code", unique = true, nullable=false)
	private String code;
	
	@OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY, mappedBy = "status")
	private Set<ExamPartTaking> takings = new HashSet<ExamPartTaking>();
	
	public ExamPartStatus() {
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Set<ExamPartTaking> getTakings() {
		return takings;
	}

	public void setTakings(Set<ExamPartTaking> takings) {
		this.takings = takings;
	}

}
