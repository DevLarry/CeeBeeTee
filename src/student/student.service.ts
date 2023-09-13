import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { hash, compare } from 'bcrypt';

@Injectable()
export class StudentService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    const { name, email, department, password } = createStudentDto;
    const hashed = await hash(password, 10);
    let res;
    try {
      res = await this.prisma.student.create({
        data: {
          name,
          email,
          departmentId: department,
          password: hashed,
        },
      });
    } catch (e) {
      throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
    }

    return res;
  }

  findAll() {
    return this.prisma.student.findMany();
  }

  findOne(id: number) {
    return this.prisma.student.findFirst({
      where: {
        id,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return this.prisma.student.delete({
      where: {
        id,
      },
    });
  }
}
