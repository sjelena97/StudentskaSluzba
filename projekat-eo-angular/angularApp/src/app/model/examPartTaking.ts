import { Enrollment } from "./enrollment";
import { ExamPart } from "./examPart";
import { ExamStatus } from "./examStatus";

export class ExamPartTaking implements ExamPartTakingInterface{
	public id: number;
    public score: number;
    public status: ExamStatus;
    public examPart: ExamPart;
    public enrollment: Enrollment;
		
	constructor(examPartTakingCfg:ExamPartTakingInterface)
	{	
		this.id = examPartTakingCfg.id;
        this.score = examPartTakingCfg.score;
		this.status = examPartTakingCfg.status;
		this.examPart = examPartTakingCfg.examPart;	
		this.enrollment = examPartTakingCfg.enrollment;
	}
}

interface ExamPartTakingInterface{
	id?: number;
    score: number;
	status: ExamStatus;
	examPart: ExamPart;
    enrollment: Enrollment;
}