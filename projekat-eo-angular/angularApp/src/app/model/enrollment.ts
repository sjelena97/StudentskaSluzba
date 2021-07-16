import { Course } from "./course";
import { Student } from "./student";

export class Enrollment implements EnrollmentInterface{
	public id: number;
	public startDate: Date;
	public endDate: Date;
	public grade: number;
	public student: Student;
    public course: Course;
		
	constructor(enrollmentCfg:EnrollmentInterface)
	{	
		this.id = enrollmentCfg.id;
		this.startDate = enrollmentCfg.startDate;
		this.endDate = enrollmentCfg.endDate;	
		this.grade = enrollmentCfg.grade;
		this.student = enrollmentCfg.student;
        this.course = enrollmentCfg.course;
	}
}

interface EnrollmentInterface{
	id?: number;
	startDate: Date;
	endDate: Date;
	grade: number;
    student: Student;
    course: Course;
}