import { Test, TestingModule } from '@nestjs/testing';
import { RegisteredService } from './registered.service';

describe('RegisteredService', () => {
  let service: RegisteredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisteredService],
    }).compile();

    service = module.get<RegisteredService>(RegisteredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
