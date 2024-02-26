import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdShoppingCardService } from './find-by-id-shopping-card.service';

describe('FindByIdShoppingCardService', () => {
  let service: FindByIdShoppingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdShoppingCardService],
    }).compile();

    service = module.get<FindByIdShoppingCardService>(FindByIdShoppingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
