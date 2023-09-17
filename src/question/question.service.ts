import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const { title, multipleChoice, authorId, courseId, options } =
      createQuestionDto;
    try {
      this.prisma.question
        .create({
          data: {
            title,
            authorId,
            courseId,
            multipleChoice,
          },
        })
        .then((question) => {
          options.forEach((option) => {
            this.prisma.option.create({
              data: {
                ...option,
                questionId: question.id,
              },
            });
          });
        });
    } catch (e) {
      throw new HttpException('Register already exists!', HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    return this.prisma.question.findMany();
  }

  findOne(id: number) {
    return this.prisma.question.findFirst({
      where: {
        id,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return this.prisma.question.delete({
      where: {
        id,
      },
    });
  }
}
