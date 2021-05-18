export class DocumentType implements DocumentTypeInterface{
	public id: number;
	public code: string;
    public name: string;
		
	constructor(documentTypeCfg: DocumentTypeInterface)
	{	
		this.id = documentTypeCfg.id;
		this.code = documentTypeCfg.code;
        this.name = documentTypeCfg.name;
	}
}

interface DocumentTypeInterface {
	id?: number;
	code: string;
    name: string;
}