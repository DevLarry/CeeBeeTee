import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisteredService } from './registered.service';
import { CreateRegisteredDto } from './dto/create-registered.dto';
import { UpdateRegisteredDto } from './dto/update-registered.dto';

@Controller('registered')
export class RegisteredController {
  constructor(private readonly registeredService: RegisteredService) {}

  @Post()
  create(@Body() createRegisteredDto: CreateRegisteredDto) {
    return this.registeredService.create(createRegisteredDto);
  }

  @Get()
  findAll() {
    return this.registeredService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registeredService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisteredDto: UpdateRegisteredDto) {
    return this.registeredService.update(+id, updateRegisteredDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registeredService.remove(+id);
  }
}
