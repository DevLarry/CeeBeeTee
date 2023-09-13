import { Department } from 'src/department/entities/department.entity';
import { Question } from 'src/question/entities/question.entity';
import { Registered } from 'src/registered/entities/registered.entity';

export class Course {
  id: number;
  code: string;
  title: string;
  departmentId: number;
  questions?: Question[];
  department?: Department;
  registery?: Registered[];
}
