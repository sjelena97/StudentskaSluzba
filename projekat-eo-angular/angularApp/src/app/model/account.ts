export class Account implements AccountInterface{
	public id: number;
	public balance: number;
		
	constructor(accountCfg:AccountInterface)
	{	
		this.id = accountCfg.id;
		this.balance = accountCfg.balance;	
	}
}

interface AccountInterface{
	id?: number;
	balance: number;
}