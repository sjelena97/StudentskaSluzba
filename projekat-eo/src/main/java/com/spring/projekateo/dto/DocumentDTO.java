package com.spring.projekateo.dto;

import java.io.Serializable;

import com.spring.projekateo.model.Document;


public class DocumentDTO implements Serializable{
	
	private Integer id;
	private String title;
	private String url;
	private StudentDTO student;
	private DocumentTypeDTO type;
	
	public DocumentDTO() {
		super();
	}

	public DocumentDTO(Integer id, String title, String url, StudentDTO student, DocumentTypeDTO type) {
		super();
		this.id = id;
		this.title = title;
		this.url = url;
		this.student = student;
		this.type = type;
	}
	
	public DocumentDTO(Document document) {
		this(document.getId(), document.getTitle(), document.getUrl(), new StudentDTO(document.getStudent()), new DocumentTypeDTO(document.getType()));
		
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public StudentDTO getStudent() {
		return student;
	}

	public void setStudent(StudentDTO student) {
		this.student = student;
	}

	public DocumentTypeDTO getType() {
		return type;
	}

	public void setType(DocumentTypeDTO type) {
		this.type = type;
	}
	
	


	

}
