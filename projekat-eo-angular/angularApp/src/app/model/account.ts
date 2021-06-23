export class Account implements AccountInterface{
	public id: number;
	public bankAccount: string;
	public model: string;
	public personalCallToNumber: string;
		
	constructor(accountCfg:AccountInterface)
	{	
		this.id = accountCfg.id;
		this.bankAccount = accountCfg.bankAccount;
		this.model = accountCfg.model;
		this.personalCallToNumber = accountCfg.personalCallToNumber;
	}
}

interface AccountInterface{
	id?: number;
	bankAccount: string;
	model: string;
	personalCallToNumber: string;
}