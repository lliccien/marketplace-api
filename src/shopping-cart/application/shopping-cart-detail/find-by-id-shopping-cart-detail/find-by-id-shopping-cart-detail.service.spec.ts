import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdShoppingCartDetailService } from './find-by-id-shopping-cart-detail.service';

describe('FindByIdShoppingCartDetailService', () => {
  let service: FindByIdShoppingCartDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdShoppingCartDetailService],
    }).compile();

    service = module.get<FindByIdShoppingCartDetailService>(
      FindByIdShoppingCartDetailService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
