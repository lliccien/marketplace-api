import { Test, TestingModule } from '@nestjs/testing';
import { CreateShoppingCartDetailService } from './create-shopping-cart-detail.service';

describe('CreateShoppingCartDetailService', () => {
  let service: CreateShoppingCartDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateShoppingCartDetailService],
    }).compile();

    service = module.get<CreateShoppingCartDetailService>(
      CreateShoppingCartDetailService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
