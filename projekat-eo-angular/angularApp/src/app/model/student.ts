import { User } from "./user";

export class Student implements StudentInterface{
	public id: number;
	public cardName: string;
	public account: Account;
	public user: User;
		
	constructor(studentCfg:StudentInterface)
	{	
		this.id = studentCfg.id;
		this.cardName = studentCfg.cardName;
		this.account = studentCfg.account;	
		this.user = studentCfg.user;
	}
}

interface StudentInterface{
	id?: number;
	cardName: string;
	account: Account;
	user: User;
}