
export class ExamPeriod implements ExamPeriodInterface{
	public id: number;
	public startDate: Date;
	public endDate: Date;
	public name: String;
	public active: boolean;
		
	constructor(examPeriodCfg:ExamPeriodInterface)
	{	
		this.id = examPeriodCfg.id;
		this.startDate = examPeriodCfg.startDate;
		this.endDate = examPeriodCfg.endDate;	
		this.name = examPeriodCfg.name;
		this.active = examPeriodCfg.active;
	}
}

interface ExamPeriodInterface{
	id?: number;
	startDate: Date;
	endDate: Date;
    name: String;
	active: boolean;
}