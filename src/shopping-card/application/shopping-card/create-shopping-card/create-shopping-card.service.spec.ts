import { Test, TestingModule } from '@nestjs/testing';
import { CreateShoppingCardService } from './create-shopping-card.service';

describe('CreateShoppingCardService', () => {
  let service: CreateShoppingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateShoppingCardService],
    }).compile();

    service = module.get<CreateShoppingCardService>(CreateShoppingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
