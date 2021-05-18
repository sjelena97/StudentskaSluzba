export class Document implements DocumentInterface{
	public id: number;
	public title: string;
    public type: DocumentType;
		
	constructor(documentCfg: DocumentInterface)
	{	
		this.id = documentCfg.id;
		this.title = documentCfg.title;
        this.type = documentCfg.type;
	}
}

interface DocumentInterface {
	id?: number;
	title: string;
    type: DocumentType;
}