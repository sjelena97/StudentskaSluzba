export class Payment implements PaymentInterface{
	public id: number;
	public date: Date;
    public amount: number;
    public purpose : string;
		
	constructor(paymentCfg: PaymentInterface)
	{	
		this.id = paymentCfg.id;
		this.date = paymentCfg.date;
        this.amount = paymentCfg.amount;
        this.purpose = paymentCfg.purpose;
	}
}

interface PaymentInterface {
	id?: number;
	date: Date;
    amount: number;
    purpose : string;
}