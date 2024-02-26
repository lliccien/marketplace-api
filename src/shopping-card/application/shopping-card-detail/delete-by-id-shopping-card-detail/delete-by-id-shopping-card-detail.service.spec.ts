import { Test, TestingModule } from '@nestjs/testing';
import { DeleteByIdShoppingCardDetailService } from './delete-by-id-shopping-card-detail.service';

describe('DeleteByIdShoppingCardDetailService', () => {
  let service: DeleteByIdShoppingCardDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteByIdShoppingCardDetailService],
    }).compile();

    service = module.get<DeleteByIdShoppingCardDetailService>(DeleteByIdShoppingCardDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
