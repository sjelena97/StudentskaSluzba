export class Student implements StudentInterface{
	public id: number;
	public cardName: string;
	public account: Account;
		
	constructor(studentCfg:StudentInterface)
	{	
		this.id = studentCfg.id;
		this.cardName = studentCfg.cardName;
		this.account = studentCfg.account;	
	}
}

interface StudentInterface{
	id?: number;
	cardName: string;
	account: Account;
}