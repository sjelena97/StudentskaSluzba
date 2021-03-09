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
@Table(name = "teaching_type")
public class TeachingType {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="teaching_type_id", unique = true, nullable = false)
	private Integer id;
	
	@Column(name = "name", nullable=false)
	private String name;
	
	@Column(name = "code", unique = true, nullable=false)
	private String code;
	
	@OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY, mappedBy = "type")
	private Set<Teaching> teachings = new HashSet<Teaching>();
	
	public TeachingType() {
		
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

	public Set<Teaching> getTeachings() {
		return teachings;
	}

	public void setTeachings(Set<Teaching> teachings) {
		this.teachings = teachings;
	}
	
}
