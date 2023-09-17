export class CreateOptionDto {
  id?: number;
  questionId: number;
  isAnswer: boolean = false;
}
