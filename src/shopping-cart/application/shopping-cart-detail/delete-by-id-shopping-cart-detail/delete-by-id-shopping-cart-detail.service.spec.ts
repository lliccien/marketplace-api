import { Test, TestingModule } from '@nestjs/testing';
import { DeleteByIdShoppingCartDetailService } from './delete-by-id-shopping-cart-detail.service';

describe('DeleteByIdShoppingCartDetailService', () => {
  let service: DeleteByIdShoppingCartDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteByIdShoppingCartDetailService],
    }).compile();

    service = module.get<DeleteByIdShoppingCartDetailService>(
      DeleteByIdShoppingCartDetailService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
