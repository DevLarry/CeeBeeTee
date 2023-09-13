import { Module } from '@nestjs/common';
import { RegisteredService } from './registered.service';
import { RegisteredController } from './registered.controller';

@Module({
  controllers: [RegisteredController],
  providers: [RegisteredService],
})
export class RegisteredModule {}
