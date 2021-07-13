
export class ExamPeriod implements ExamPeriodInterface{
	public id: number;
	public startDate: Date;
	public endDate: Date;
	public name: String;
		
	constructor(examPeriodCfg:ExamPeriodInterface)
	{	
		this.id = examPeriodCfg.id;
		this.startDate = examPeriodCfg.startDate;
		this.endDate = examPeriodCfg.endDate;	
		this.name = examPeriodCfg.name;
	}
}

interface ExamPeriodInterface{
	id?: number;
	startDate: Date;
	endDate: Date;
    name: String;
}