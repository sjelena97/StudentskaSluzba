export class TeachingType implements TeachingTypeInterface{
	public id: number;
	public code: string;
    public name: string;
		
	constructor(teachingTypeCfg: TeachingTypeInterface)
	{	
		this.id = teachingTypeCfg.id;
		this.code = teachingTypeCfg.code;
        this.name = teachingTypeCfg.name;
	}
}

interface TeachingTypeInterface {
	id?: number;
	code: string;
    name: string;
}