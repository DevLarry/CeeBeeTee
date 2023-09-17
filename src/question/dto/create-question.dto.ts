import { CreateOptionDto } from 'src/option/dto/create-option.dto';

export class CreateQuestionDto {
  id?: number;
  title: string;
  multipleChoice?: boolean = false;
  authorId: number;
  courseId: number;
  options?: CreateOptionDto[];
}
