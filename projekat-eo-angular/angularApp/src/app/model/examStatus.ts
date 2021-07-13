export class ExamStatus implements ExamStatusInterface{
	public id: number;
	public name: String;
	public code: String;
		
	constructor(examStatusCfg:ExamStatusInterface)
	{	
		this.id = examStatusCfg.id;
		this.name = examStatusCfg.name;
		this.code = examStatusCfg.code;	
	}
}

interface ExamStatusInterface{
	id?: number;
	name: String;
	code: String;
}