import { Test, TestingModule } from '@nestjs/testing';
import { CreateShoppingCartService } from './create-shopping-cart.service';

describe('CreateShoppingCartService', () => {
  let service: CreateShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateShoppingCartService],
    }).compile();

    service = module.get<CreateShoppingCartService>(CreateShoppingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
