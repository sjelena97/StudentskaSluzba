export class Course implements CourseInterface{
	public id: number;
	public name: string;
	public code: string;
    public espb: number;
	public active: boolean;
		
	constructor(courseCfg: CourseInterface)
	{	
		this.id = courseCfg.id;
		this.name = courseCfg.name;
		this.code = courseCfg.code;
        this.espb = courseCfg.espb;
		this.active = courseCfg.active;
	}
}

interface CourseInterface {
	id?: number;
	name: string;
	code: string;
    espb: number;
	active: boolean;
}