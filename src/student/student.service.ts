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
    const { name, email, username, departmentId, password } = createStudentDto;
    const hashed = await hash(password, 10);
    let res;
    try {
      res = await this.prisma.user.create({
        data: {
          name,
          email,
          username,
          departmentId,
          password: hashed,
        },
      });
    } catch (e) {
      throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
    }

    return res;
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  Authenticate(user: { email: string; password: string }) {
    return this.prisma.user.findUnique({
      where: {
        ...user,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        OR: [{ email }, { username: email }],
      },
    });
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.user.update({
      where: { id },
      data: { ...updateStudentDto },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
