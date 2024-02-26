import { Test, TestingModule } from '@nestjs/testing';
import { FindAllShoppingCardDetailService } from './find-all-shopping-card-detail.service';

describe('FindAllShoppingCardDetailService', () => {
  let service: FindAllShoppingCardDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllShoppingCardDetailService],
    }).compile();

    service = module.get<FindAllShoppingCardDetailService>(FindAllShoppingCardDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
