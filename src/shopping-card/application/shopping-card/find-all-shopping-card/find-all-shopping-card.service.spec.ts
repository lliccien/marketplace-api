import { Test, TestingModule } from '@nestjs/testing';
import { FindAllShoppingCardService } from './find-all-shopping-card.service';

describe('FindAllShoppingCardService', () => {
  let service: FindAllShoppingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllShoppingCardService],
    }).compile();

    service = module.get<FindAllShoppingCardService>(FindAllShoppingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
