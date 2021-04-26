export class Course implements CourseInterface{
	public id: number;
	public name: string;
    public ESPB: number;
		
	constructor(courseCfg: CourseInterface)
	{	
		this.id = courseCfg.id;
		this.name = courseCfg.name;
        this.ESPB = courseCfg.ESPB;
	}
}

interface CourseInterface {
	id?: number;
	name: string;
    ESPB: number;
}