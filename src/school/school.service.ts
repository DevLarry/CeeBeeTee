import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}
  async create(createSchoolDto: CreateSchoolDto) {
    try {
      return await this.prisma.school.create({
        data: {
          ...createSchoolDto,
        },
      });
    } catch (e) {
      throw new HttpException('School already exist', HttpStatus.BAD_REQUEST);
    }
    // return data;
  }

  async findAll() {
    return await this.prisma.school.findMany();
  }

  findOne(id: number) {
    return this.prisma.school.findFirst({
      where: {
        id,
      },
    });
  }

  async findStaffs(id: number) {
    const school = await this.prisma.school.findFirst({
      where: {
        id,
      },
      include: {
        Departments: {
          include: {
            students: {
              where: {
                OR: [{ role: 'STAFF' }, { role: 'OWNER' }],
              },
            },
          },
        },
      },
    });
    if (!school) {
      throw new NotFoundException('School not found');
    }

    return school.Departments.map((department) => {
      return department.students;
    })
      .flat(2)
      .map((staff) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...rest } = staff;
        return rest;
      });
  }

  async findDepartments(id: number) {
    const school = await this.prisma.school.findFirst({
      where: {
        id,
      },
      include: {
        Departments: true,
      },
    });
    if (!school) {
      throw new NotFoundException('School not found');
    }

    return school.Departments;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return this.prisma.school.update({
      where: { id },
      data: {
        ...updateSchoolDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.school.delete({ where: { id } });
  }
}
