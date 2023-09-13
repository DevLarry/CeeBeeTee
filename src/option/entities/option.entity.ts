import { Question } from 'src/question/entities/question.entity';

export class Option {
  id: number;
  questionId: number;
  isAnswer: boolean = false;
  question?: Question;
}
