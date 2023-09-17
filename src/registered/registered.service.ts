import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRegisteredDto } from './dto/create-registered.dto';
import { UpdateRegisteredDto } from './dto/update-registered.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RegisteredService {
  constructor(private prisma: PrismaService) {}

  async create(createRegisteredDto: CreateRegisteredDto) {
    try {
      return this.prisma.registered.create({
        data: {
          ...createRegisteredDto,
        },
      });
    } catch (e) {
      throw new HttpException('Register already exists!', HttpStatus.FORBIDDEN);
    }
  }

  findAll() {
    return this.prisma.registered.findMany();
  }

  findOne(id: number) {
    return this.prisma.registered.findFirst({
      where: {
        id,
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateRegisteredDto: UpdateRegisteredDto) {
    return `This action updates a #${id} registered`;
  }

  remove(id: number) {
    return this.prisma.registered.delete({
      where: {
        id,
      },
    });
  }
}
