import { Course } from "./course";
import { ExamPartType } from "./examPartType";
import { ExamPeriod } from "./examPeriod";

export class ExamPart implements ExamPartInterface{
	public id: number;
	public points: number;
	public date: Date;
	public location: String;
    public type: ExamPartType;
    public period: ExamPeriod;
    public course: Course;
    public active: boolean;
		
	constructor(examPartCfg:ExamPartInterface)
	{	
		this.id = examPartCfg.id;
		this.points = examPartCfg.points;
		this.date = examPartCfg.date;	
		this.location = examPartCfg.location;
        this.type = examPartCfg.type;
        this.period = examPartCfg.period;
        this.course = examPartCfg.course;
        this.active = examPartCfg.active;
	}
}

interface ExamPartInterface{
	id?: number;
	points: number;
	date: Date;
    location: String;
    type: ExamPartType;
    period: ExamPeriod;
    course: Course;
    active: boolean;
}