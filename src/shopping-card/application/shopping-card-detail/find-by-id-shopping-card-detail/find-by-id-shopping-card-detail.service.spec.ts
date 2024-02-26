import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdShoppingCardDetailService } from './find-by-id-shopping-card-detail.service';

describe('FindByIdShoppingCardDetailService', () => {
  let service: FindByIdShoppingCardDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdShoppingCardDetailService],
    }).compile();

    service = module.get<FindByIdShoppingCardDetailService>(FindByIdShoppingCardDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
