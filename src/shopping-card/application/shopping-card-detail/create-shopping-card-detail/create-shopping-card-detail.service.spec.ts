import { Test, TestingModule } from '@nestjs/testing';
import { CreateShoppingCardDetailService } from './create-shopping-card-detail.service';

describe('CreateShoppingCardDetailService', () => {
  let service: CreateShoppingCardDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateShoppingCardDetailService],
    }).compile();

    service = module.get<CreateShoppingCardDetailService>(CreateShoppingCardDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
