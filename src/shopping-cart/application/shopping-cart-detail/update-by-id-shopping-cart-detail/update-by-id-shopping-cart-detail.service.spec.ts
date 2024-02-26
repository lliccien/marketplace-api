import { Test, TestingModule } from '@nestjs/testing';
import { UpdateByIdShoppingCartDetailService } from './update-by-id-shopping-cart-detail.service';

describe('UpdateByIdShoppingCartDetailService', () => {
  let service: UpdateByIdShoppingCartDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateByIdShoppingCartDetailService],
    }).compile();

    service = module.get<UpdateByIdShoppingCartDetailService>(
      UpdateByIdShoppingCartDetailService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
