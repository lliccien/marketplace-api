import { Test, TestingModule } from '@nestjs/testing';
import { FindAllShoppingCartDetailService } from './find-all-shopping-cart-detail.service';

describe('FindAllShoppingCartDetailService', () => {
  let service: FindAllShoppingCartDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllShoppingCartDetailService],
    }).compile();

    service = module.get<FindAllShoppingCartDetailService>(
      FindAllShoppingCartDetailService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
