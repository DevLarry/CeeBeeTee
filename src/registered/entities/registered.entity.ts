import { Course } from 'src/course/entities/course.entity';
import { Student } from 'src/student/entities/student.entity';

export class Registered {
  id: number;
  courseId: number;
  studentId: number;
  student?: Student;
  course?: Course;
}
