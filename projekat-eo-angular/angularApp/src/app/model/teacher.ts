import { User } from "./user";

export class Teacher implements TeacherInterface{
	public id: number;
	public user: User;
		
	constructor(teacherCfg:TeacherInterface)
	{	
		this.id = teacherCfg.id;	
		this.user = teacherCfg.user;
	}
}

interface TeacherInterface{
	id?: number;
	user: User;
}