import { Course } from "./course";

export class ExamPartType implements ExamPartTypeInterface{
	public id: number;
	public name: String;
	public code: String;
		
	constructor(examPartTypeCfg:ExamPartTypeInterface)
	{	
		this.id = examPartTypeCfg.id;
		this.name = examPartTypeCfg.name;
		this.code = examPartTypeCfg.code;	
	}
}

interface ExamPartTypeInterface{
	id?: number;
	name: String;
	code: String;
}