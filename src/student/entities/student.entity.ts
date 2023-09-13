import { Course } from 'src/course/entities/course.entity';
import { Department } from 'src/department/entities/department.entity';

export class Student {
  id: number;
  name: string;
  email: string;
  departmentId: number;
  password: string;
  department?: Department;
  courses?: Course[];
}
