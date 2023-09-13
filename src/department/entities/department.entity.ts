import { Course } from 'src/course/entities/course.entity';
import { Staff } from 'src/staff/entities/staff.entity';
import { Student } from 'src/student/entities/student.entity';

export class Department {
  id: number;
  name: string;
  courses?: Course[];
  staffs?: Staff[];
  students?: Student[];
}
