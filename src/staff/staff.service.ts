import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}
  async create(createStaffDto: CreateStaffDto) {
    const { name, email, username, departmentId, password } = createStaffDto;
    const hashed = await hash(password, 10);
    let res;
    try {
      res = await this.prisma.user.create({
        data: {
          name,
          email,
          username,
          departmentId,
          role: 'STUDENT',
          password: hashed,
        },
      });
    } catch (e) {
      throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
    }

    return res;
  }

  findAll(dept?: number) {
    const obj: any = {};
    if (dept) obj.departmentId = dept;
    return this.prisma.user.findMany({ where: { ...obj, role: 'STAFF' } });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
        role: 'STAFF',
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

  update(id: number, updateStaffDto: UpdateStaffDto) {
    return this.prisma.user.update({
      where: { id, role: 'STAFF' },
      data: { ...updateStaffDto },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  getAllCourses(identity: number) {
    return this.prisma.user.findUnique({
      where: {
        id: identity,
      },
      include: {
        courses: true,
      },
    });
  }
}
