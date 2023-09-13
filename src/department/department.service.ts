import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      return await this.prisma.department.create({
        data: {
          name: createDepartmentDto.name,
        },
      });
    } catch (e) {
      throw new HttpException(
        'Department already exist',
        HttpStatus.BAD_REQUEST,
      );
    }
    // return data;
  }

  async findAll() {
    return await this.prisma.department.findMany();
  }

  findOne(id: number) {
    return this.prisma.department.findFirst({
      where: {
        id,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.prisma.department.update({
      where: { id },
      data: {
        name: updateDepartmentDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.department.delete({ where: { id } });
  }
}
