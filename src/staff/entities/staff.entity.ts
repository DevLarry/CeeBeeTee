import { Department } from 'src/department/entities/department.entity';
import { Question } from 'src/question/entities/question.entity';

export class Staff {
  id: number;
  email: string;
  name: string;
  departmentId: number;
  password: string;
  questiions?: Question[];
  department?: Department;
}
