import { DocumentType } from "./document-type";
import { Student } from "./student";

export class Document implements DocumentInterface{
	public id: number;
	public title: string;
	public url: string;
    public type: DocumentType;
	public student: Student;
		
	constructor(documentCfg: DocumentInterface)
	{	
		this.id = documentCfg.id;
		this.title = documentCfg.title;
		this.url = documentCfg.url;
        this.type = documentCfg.type;
		this.student = documentCfg.student;
	}
}

interface DocumentInterface {
	id?: number;
	title: string;
	url: string;
    type: DocumentType;
	student: Student;
}