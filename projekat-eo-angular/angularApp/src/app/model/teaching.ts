import { Course } from "./course";
import { Teacher } from "./teacher";
import { TeachingType } from "./teaching-type";

export class Teaching implements TeachingInterface{
	public id: number;
	public startDate: Date;
	public endDate: Date;
	public teacher: Teacher;
    public course: Course;
    public type: TeachingType;
		
	constructor(teachingCfg:TeachingInterface)
	{	
		this.id = teachingCfg.id;
		this.startDate = teachingCfg.startDate;
		this.endDate = teachingCfg.endDate;	
		this.teacher = teachingCfg.teacher;
        this.course = teachingCfg.course;
        this.type = teachingCfg.type;
	}
}

interface TeachingInterface{
	id?: number;
	startDate: Date;
	endDate: Date;
    teacher: Teacher;
    course: Course;
    type: TeachingType;
}