package com.spring.projekateo.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.projekateo.dto.DocumentDTO;
import com.spring.projekateo.dto.DocumentTypeDTO;
import com.spring.projekateo.model.Document;
import com.spring.projekateo.model.DocumentType;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.DocumentService;
import com.spring.projekateo.service.DocumentTypeService;
import com.spring.projekateo.service.StudentService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/documents", produces = MediaType.APPLICATION_JSON_VALUE)
public class DocumentController {
	
	@Autowired
    private DocumentService documentService;
	
	@Autowired
    private DocumentTypeService documentTypeService;
	
	@Autowired
    private UserService userService;
	
	@Autowired
    private StudentService studentService;
	
	@Value("${dataDir}")
    private String dataDirPath;
	
	@GetMapping("/getAllDocumentsForUser/{username}")
	public ResponseEntity<List<DocumentDTO>> getAllDocumentsForStudent(@PathVariable("username") String username){
			User user = userService.findByUsername(username);
			Student student = studentService.findByUser(user);
			if(student == null) {
				return new ResponseEntity<List<DocumentDTO>>(HttpStatus.BAD_REQUEST);
			}
		 	Set<Document> documents = documentService.getAllDocumentsByStudent(student);
		 	List<DocumentDTO> documentsDTO = new ArrayList<>();
			for (Document d : documents) {
				DocumentDTO documentDTO = new DocumentDTO();
				documentDTO.setId(d.getId());
				documentDTO.setTitle(d.getTitle());
				documentDTO.setUrl(d.getUrl());
				documentDTO.setType(new DocumentTypeDTO(d.getType()));
				documentDTO.setActive(d.isActive());
				//we leave student field empty
				
				documentsDTO.add(documentDTO);
			}
			return new ResponseEntity<>(documentsDTO, HttpStatus.OK);
	}
	
	@GetMapping("/getAllDocumentsForStudent/{student_id}")
	public ResponseEntity<List<DocumentDTO>> getAllDocumentsForStudentById(@PathVariable("student_id") int student_id){
			Student student = studentService.findById(student_id);
			if(student == null) {
				return new ResponseEntity<List<DocumentDTO>>(HttpStatus.BAD_REQUEST);
			}
		 	Set<Document> documents = documentService.getAllDocumentsByStudent(student);
		 	List<DocumentDTO> documentsDTO = new ArrayList<>();
			for (Document d : documents) {
				if(d.isActive()) {
					DocumentDTO documentDTO = new DocumentDTO();
					documentDTO.setId(d.getId());
					documentDTO.setTitle(d.getTitle());
					documentDTO.setUrl(d.getUrl());
					documentDTO.setType(new DocumentTypeDTO(d.getType()));
					documentDTO.setActive(d.isActive());
					//we leave student field empty
					
					documentsDTO.add(documentDTO);
				}
			}
			return new ResponseEntity<>(documentsDTO, HttpStatus.OK);
	}
	
	@GetMapping("getDocumentById/{document_id}")
	public ResponseEntity<DocumentDTO> getDocumentById(@PathVariable("document_id") int document_id) {
		Document document = documentService.findById(document_id);
		if (document == null) {
			return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<DocumentDTO>(new DocumentDTO(document), HttpStatus.OK);
		}
	}
	
	@PostMapping("/addDocument/{student_id}")
	public ResponseEntity<DocumentDTO> createDocument(@RequestBody DocumentDTO newDocument, @PathVariable("student_id") int student_id) {
		System.out.println(newDocument.getUrl());
		Student student = studentService.findById(student_id);
		if (student == null) {
			return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		}
		DocumentType type = documentTypeService.findById(newDocument.getType().getId());
		if (type == null) {
			return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		}
		Document document = new Document();
		document.setTitle(newDocument.getTitle());
		document.setUrl(newDocument.getUrl());
		document.setStudent(student);
		document.setType(type);
				
		document = documentService.save(document);
		return new ResponseEntity<DocumentDTO>(new DocumentDTO(document), HttpStatus.CREATED);	
	}
	
	
	@PutMapping("/deleteDocument/{document_id}")
	public ResponseEntity<Void> deleteDocument(@PathVariable("document_id") int document_id) {

		Document document = documentService.findById(document_id);
		if (document != null){
			document.setActive(false);
			document = documentService.save(document);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {		
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@GetMapping("/download/{document_id}")
	public ResponseEntity<Resource> download(@PathVariable("document_id") int documentId) throws Exception {
		
		// Pronalazimo dokument koji treba preuzeti
		Document document = documentService.findById(documentId);

		Resource file = documentService.download(document.getUrl());
	    Path path = file.getFile()
                .toPath();

	    return ResponseEntity.ok()
                     .header(HttpHeaders.CONTENT_TYPE, Files.probeContentType(path))
                     .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                     .body(file);

		
	}
	
	 @PostMapping("/upload/{student_id}/{type_id}")
	 public ResponseEntity<DocumentDTO> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable("student_id") int student_id, @PathVariable("type_id") int type_id) throws FileUploadException {
		 
		 Student student = studentService.findById(student_id);
		 if (student == null) {
			 return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		 }
			
		 DocumentType type = documentTypeService.findById(type_id);
		 if (type == null) {
			 return new ResponseEntity<DocumentDTO>(HttpStatus.BAD_REQUEST);
		 }
			
		 try {
			 String path = dataDirPath + "/" + student.getUser().getUsername();
	         Path root = Paths.get(path);
	         Path resolve = root.resolve(file.getOriginalFilename());
	         if (resolve.toFile().exists()) {
	                throw new FileUploadException("File already exists: " + file.getOriginalFilename());
	         }
	         Files.copy(file.getInputStream(), resolve);
	     } catch (Exception e) {
	    	 throw new FileUploadException("Could not store the file. Error: " + e.getMessage());
	     }
		 
		 Document document = new Document();
		 
		 String fileName = file.getOriginalFilename();
		 String title = fileName.substring(0, fileName.lastIndexOf('.'));
		 System.out.println("title: " + title);
		 
		 document.setTitle(title);
		 
		 String url = dataDirPath + "/" + student.getUser().getUsername() + "/" + file.getOriginalFilename();
		 document.setUrl(url);
		 
		 document.setStudent(student);
		 document.setType(type);

		 document = documentService.save(document);
			
		 return ResponseEntity.status(HttpStatus.CREATED)
	                             .body(new DocumentDTO(document));
	 }

}
