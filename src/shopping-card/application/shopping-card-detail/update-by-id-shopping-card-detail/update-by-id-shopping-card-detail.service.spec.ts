import { Test, TestingModule } from '@nestjs/testing';
import { UpdateByIdShoppingCardDetailService } from './update-by-id-shopping-card-detail.service';

describe('UpdateByIdShoppingCardDetailService', () => {
  let service: UpdateByIdShoppingCardDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateByIdShoppingCardDetailService],
    }).compile();

    service = module.get<UpdateByIdShoppingCardDetailService>(UpdateByIdShoppingCardDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
