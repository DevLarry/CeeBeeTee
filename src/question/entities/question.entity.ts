import { Course } from 'src/course/entities/course.entity';
import { Option } from 'src/option/entities/option.entity';
import { Staff } from 'src/staff/entities/staff.entity';

export class Question {
  id: number;
  title: string;
  options: Option[];
  multipleChiose: boolean = false;
  course?: Course;
  courseId: number;
  author?: Staff;
  authorId: number;
}
