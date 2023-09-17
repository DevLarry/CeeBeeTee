import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}
  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    // const {name, code, title, departmentId, } = createCourseDto;
    try {
      return this.prisma.course.create({
        data: {
          ...createCourseDto,
        },
      });
    } catch (e) {
      throw new HttpException('Course already exists!', HttpStatus.FORBIDDEN);
    }
  }

  findAll(dept?: number) {
    const obj: any = {};
    if (dept) obj.take = dept;
    return this.prisma.course.findMany(obj);
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: { ...updateCourseDto },
    });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
