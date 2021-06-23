import { Account } from "./account";

export class Payment implements PaymentInterface{
	public id: number;
	public date: Date;
    public amount: number;
    public purpose : string;
	public account: Account;
		
	constructor(paymentCfg: PaymentInterface)
	{	
		this.id = paymentCfg.id;
		this.date = paymentCfg.date;
        this.amount = paymentCfg.amount;
        this.purpose = paymentCfg.purpose;
		this.account = paymentCfg.account;
	}
}

interface PaymentInterface {
	id?: number;
	date: Date;
    amount: number;
    purpose : string;
	account: Account;
}