export class User implements UserInterface{
	public id: number;
	public username: string;
	public firstName: string;
	public lastName: string;
		
	constructor(userCfg:UserInterface)
	{	
		this.id = userCfg.id;
		this.username = userCfg.username;
		this.firstName = userCfg.firstName;
		this.lastName = userCfg.lastName;		
	}
}

interface UserInterface{
	id?: number;
	username: string;
	firstName: string;	
	lastName: string;
}