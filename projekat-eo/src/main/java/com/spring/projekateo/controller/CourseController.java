package com.spring.projekateo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
import org.springframework.data.domain.Sort.Order;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring.projekateo.dto.CourseDTO;
import com.spring.projekateo.model.Authority;
import com.spring.projekateo.model.Course;
import com.spring.projekateo.model.Enrollment;
import com.spring.projekateo.model.Student;
import com.spring.projekateo.model.Teacher;
import com.spring.projekateo.model.Teaching;
import com.spring.projekateo.model.User;
import com.spring.projekateo.service.CourseService;
import com.spring.projekateo.service.EnrollmentService;
import com.spring.projekateo.service.StudentService;
import com.spring.projekateo.service.TeacherService;
import com.spring.projekateo.service.TeachingService;
import com.spring.projekateo.service.UserService;

@RestController
@RequestMapping(value = "/courses", produces = MediaType.APPLICATION_JSON_VALUE)
public class CourseController {

	@Autowired
	private CourseService courseService;

	@Autowired
	private EnrollmentService enrollmentService;

	@Autowired
	private StudentService studentService;

	@Autowired
	private TeacherService teacherService;

	@Autowired
	private TeachingService teachingService;

	@Autowired
	private UserService userService;

	
	private Sort.Direction getSortDirection(String direction) {
		    if (direction.equals("asc")) {
		      return Sort.Direction.ASC;
		    } else if (direction.equals("desc")) {
		      return Sort.Direction.DESC;
		    }

		    return Sort.Direction.ASC;
		  }
	
	
//	@GetMapping("/{username}")
//	public ResponseEntity<Map<String, Object>> getAll(@PathVariable("username") String username,@RequestParam(required = false) String search,
//			@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "3") int size,
//			@RequestParam(defaultValue = "course_id,desc") String[] sort) {
//		
//		
//		
//		
//		System.out.println("dobio sam " +username+ " "+search + " " + page + " " + size + " " + sort.toString());
//		try {
//
//			List<Course> courses = new ArrayList<Course>();
//			
//			List<Order> orders = new ArrayList<Order>();
//
//		      if (sort[0].contains(",")) {
//		        // will sort more than 2 fields
//		        // sortOrder="field, direction"
//		        for (String sortOrder : sort) {
//		          String[] _sort = sortOrder.split(",");
//		          orders.add(new Order(getSortDirection(_sort[1]), _sort[0]));
//		        }
//		      } else {
//		        // sort=[field, direction]
//		        orders.add(new Order(getSortDirection(sort[1]), sort[0]));
//		      }
//
//
//			Pageable paging = PageRequest.of(page, size,Sort.by(orders));
//
//			Page<Course> pageTuts;
//			if (search == null)
//				pageTuts = courseService.findAll(paging);
//			else
//				pageTuts = courseService.findByNameContaining(search, paging);
//
//			courses = pageTuts.getContent();
//			
//			
//			User user = userService.findByUsername(username);
//			if (user == null) {
//				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//			}
//			Authority authority = user.getAuthority();
//			List<Course> courses1 = new ArrayList<Course>();
//			
//			if (authority.getName().equalsIgnoreCase("ADMIN")) {
//				List<Course> allCourses = courseService.getAllCourses();
//				for (Course c : allCourses) {
//					courses1.add(c);
//				}
//			} else if (authority.getName().equalsIgnoreCase("TEACHER")) {
//				Teacher teacher = teacherService.findByUser(user);
//				Set<Teaching> teachings = teachingService.getAllTeachingsByTeacher(teacher);
//				for (Teaching t : teachings) {
//					courses1.add(t.getCourse());
//				}
//			} else if (authority.getName().equalsIgnoreCase("STUDENT")) {
//				Student student = studentService.findByUser(user);
//				Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
//				for (Enrollment e : enrollments) {
//					courses1.add(e.getCourse());
//				}
//			}
//
//			List<CourseDTO> coursesDTOforUser = new ArrayList<>();
//			for (Course c : courses1) {
//				if (c.isActive()) {
//					CourseDTO courseDTO = new CourseDTO();
//					courseDTO.setId(c.getId());
//					courseDTO.setName(c.getName());
//					courseDTO.setCode(c.getCode());
//					courseDTO.setESPB(c.getESPB());
//					courseDTO.setActive(c.isActive());
//
//					coursesDTOforUser.add(courseDTO);
//				}
//			}
//			
//			
//
//
//			List<CourseDTO> coursesDTO = new ArrayList<>();
//			for (Course c : courses) {
//				coursesDTO.add(new CourseDTO(c));
//			}
//			
//			
//			
//			List<CourseDTO> coursesDTOfinal = new ArrayList<>();
//
//			for(CourseDTO c1 : coursesDTO) {
//					System.out.println("c1 je " + c1.getCode());
//					for(CourseDTO c2: coursesDTOforUser ) {
//						if(c2.getCode().equals(c1.getCode())) {
//							System.out.println("c1 je " + c1.getCode());
//							System.out.println("c2 je " + c2.getCode());
//							coursesDTOfinal.add(c1);
//							
//					}
//					
//				}
//			}
//
//			System.out.println("prva je" +coursesDTO.toString());
//			System.out.println("druga je" +coursesDTOforUser.toString());
//			System.out.println("treca je" +coursesDTOfinal.toString());
//
//			Page<CourseDTO> page1 = new PageImpl<>(coursesDTOfinal, paging, coursesDTOfinal.size());
//
//
//			Map<String, Object> response = new HashMap<>();
//			response.put("courses", coursesDTOfinal);
//			response.put("currentPage", page1.getNumber());
//			response.put("totalItems", page1.getTotalElements());
//			response.put("totalPages", page1.getTotalPages());
//
//			return new ResponseEntity<>(response, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}

//	  @GetMapping("/published")
//	  public ResponseEntity<Map<String, Object>> findByPublished(
//	        @RequestParam(defaultValue = "1") int page,
//	        @RequestParam(defaultValue = "3") int size
//	      ) {
//	    try {      
//	      List<Tutorial> tutorials = new ArrayList<Tutorial>();
//	      Pageable paging = PageRequest.of(page, size);
//	      
//	      Page<Tutorial> pageTuts = tutorialRepository.findByPublished(true, paging);
//	      tutorials = pageTuts.getContent();
//	            
//	      Map<String, Object> response = new HashMap<>();
//	      response.put("tutorials", tutorials);
//	      response.put("currentPage", pageTuts.getNumber());
//	      response.put("totalItems", pageTuts.getTotalElements());
//	      response.put("totalPages", pageTuts.getTotalPages());
//	      
//	      return new ResponseEntity<>(response, HttpStatus.OK);
//	    } catch (Exception e) {
//	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//	    }
//	  }

	@GetMapping("/getAllCourses")
	public ResponseEntity<List<CourseDTO>> getAllCourses() {
		List<Course> courses = courseService.getAllCourses();
		// convert courses to DTOs
		List<CourseDTO> coursesDTO = new ArrayList<>();
		for (Course c : courses) {
			coursesDTO.add(new CourseDTO(c));
		}
		return new ResponseEntity<>(coursesDTO, HttpStatus.OK);
	}

	@GetMapping("getCourseById/{course_id}")
	public ResponseEntity<CourseDTO> getCourseById(@PathVariable("course_id") int course_id) {
		Course course = courseService.findById(course_id);
		if (course == null) {
			return new ResponseEntity<CourseDTO>(HttpStatus.BAD_REQUEST);
		} else {
			return new ResponseEntity<CourseDTO>(new CourseDTO(course), HttpStatus.OK);
		}
	}

	@GetMapping("/getAllCoursesForUser/{username}")
	public ResponseEntity<List<CourseDTO>> getAllCoursesForUser(@PathVariable("username") String username) {
		User user = userService.findByUsername(username);
		if (user == null) {
			return new ResponseEntity<List<CourseDTO>>(HttpStatus.BAD_REQUEST);
		}
		Authority authority = user.getAuthority();
		Set<Course> courses = new HashSet<Course>();
		if (authority.getName().equalsIgnoreCase("ADMIN")) {
			List<Course> allCourses = courseService.getAllCourses();
			for (Course c : allCourses) {
				courses.add(c);
			}
		} else if (authority.getName().equalsIgnoreCase("TEACHER")) {
			Teacher teacher = teacherService.findByUser(user);
			Set<Teaching> teachings = teachingService.getAllTeachingsByTeacher(teacher);
			for (Teaching t : teachings) {
				courses.add(t.getCourse());
			}
		} else if (authority.getName().equalsIgnoreCase("STUDENT")) {
			Student student = studentService.findByUser(user);
			Set<Enrollment> enrollments = enrollmentService.getAllEnrollmentsByStudent(student);
			for (Enrollment e : enrollments) {
				courses.add(e.getCourse());
			}
		}

		List<CourseDTO> coursesDTO = new ArrayList<>();
		for (Course c : courses) {
			if (c.isActive()) {
				CourseDTO courseDTO = new CourseDTO();
				courseDTO.setId(c.getId());
				courseDTO.setName(c.getName());
				courseDTO.setCode(c.getCode());
				courseDTO.setESPB(c.getESPB());
				courseDTO.setActive(c.isActive());

				coursesDTO.add(courseDTO);
			}
		}
		return new ResponseEntity<>(coursesDTO, HttpStatus.OK);
	}

	@PostMapping("/addCourse")
	public ResponseEntity<CourseDTO> createCourse(@RequestBody CourseDTO courseDTO) {

		Course course = courseService.findCourseByCode(courseDTO.getCode());
		if (course != null) {
			return new ResponseEntity<CourseDTO>(HttpStatus.BAD_REQUEST);
		}

		Course c = new Course();

		c.setCode(courseDTO.getCode());
		c.setName(courseDTO.getName());
		c.setESPB(courseDTO.getESPB());

		c = courseService.save(c);

		return new ResponseEntity<CourseDTO>(new CourseDTO(c), HttpStatus.CREATED);
	}

	@PutMapping("/updateCourse/{course_id}")
	public ResponseEntity<CourseDTO> updateCourse(@RequestBody CourseDTO courseDTO,
			@PathVariable("course_id") int course_id) {

		Course course = courseService.findById(course_id);
		if (course == null) {
			return new ResponseEntity<CourseDTO>(HttpStatus.BAD_REQUEST);
		}

		if (!courseDTO.getCode().equalsIgnoreCase(course.getCode())) {
			Course course1 = courseService.findCourseByCode(courseDTO.getCode());

			if (course1 != null) {
				return new ResponseEntity<CourseDTO>(HttpStatus.BAD_REQUEST);
			}
		}

		course.setCode(courseDTO.getCode());
		course.setName(courseDTO.getName());
		course.setESPB(courseDTO.getESPB());
		course.setActive(courseDTO.isActive());

		course = courseService.save(course);

		return new ResponseEntity<CourseDTO>(new CourseDTO(course), HttpStatus.OK);
	}

	@PutMapping("/deleteCourse/{course_id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable("course_id") int course_id) {

		Course course = courseService.findById(course_id);
		if (course != null) {
			course.setActive(false);
			course = courseService.save(course);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}

	}

}
