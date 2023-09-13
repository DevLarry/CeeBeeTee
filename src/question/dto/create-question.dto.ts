export class CreateQuestionDto {
  id?: number;
  title: string;
  multipleCoice: boolean = false;
  author: number;
  course: number;
}
