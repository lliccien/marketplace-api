import { Test, TestingModule } from '@nestjs/testing';
import { UpdateByIdShoppingCardService } from './update-by-id-shopping-card.service';

describe('UpdateByIdShoppingCardService', () => {
  let service: UpdateByIdShoppingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateByIdShoppingCardService],
    }).compile();

    service = module.get<UpdateByIdShoppingCardService>(UpdateByIdShoppingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
