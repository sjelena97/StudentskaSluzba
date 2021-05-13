export class Student implements StudentInterface{
	public id: number;
	public cardNumber: string;
		
	constructor(studentCfg:StudentInterface)
	{	
		this.id = studentCfg.id;
		this.cardNumber = studentCfg.cardNumber;		
	}
}

interface StudentInterface{
	id?: number;
	cardNumber: string;
}