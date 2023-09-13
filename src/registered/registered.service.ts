import { Injectable } from '@nestjs/common';
import { CreateRegisteredDto } from './dto/create-registered.dto';
import { UpdateRegisteredDto } from './dto/update-registered.dto';

@Injectable()
export class RegisteredService {
  create(createRegisteredDto: CreateRegisteredDto) {
    return 'This action adds a new registered';
  }

  findAll() {
    return `This action returns all registered`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registered`;
  }

  update(id: number, updateRegisteredDto: UpdateRegisteredDto) {
    return `This action updates a #${id} registered`;
  }

  remove(id: number) {
    return `This action removes a #${id} registered`;
  }
}
