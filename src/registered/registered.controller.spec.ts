import { Test, TestingModule } from '@nestjs/testing';
import { RegisteredController } from './registered.controller';
import { RegisteredService } from './registered.service';

describe('RegisteredController', () => {
  let controller: RegisteredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisteredController],
      providers: [RegisteredService],
    }).compile();

    controller = module.get<RegisteredController>(RegisteredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
