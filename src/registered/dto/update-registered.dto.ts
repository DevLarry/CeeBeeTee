import { PartialType } from '@nestjs/mapped-types';
import { CreateRegisteredDto } from './create-registered.dto';

export class UpdateRegisteredDto extends PartialType(CreateRegisteredDto) {}
