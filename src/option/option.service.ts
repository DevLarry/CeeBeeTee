import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OptionService {
  constructor(private prisma: PrismaService) {}

  async create(createOptionDto: CreateOptionDto) {
    try {
      return this.prisma.option.create({
        data: {
          ...createOptionDto,
        },
      });
    } catch (e) {
      throw new HttpException('Register already exists!', HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    return this.prisma.option.findMany();
  }

  findOne(id: number) {
    return this.prisma.option.findFirst({
      where: {
        id,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateOptionDto: UpdateOptionDto) {
    return `This action updates a #${id} option`;
  }

  remove(id: number) {
    return this.prisma.option.delete({
      where: {
        id,
      },
    });
  }
}
