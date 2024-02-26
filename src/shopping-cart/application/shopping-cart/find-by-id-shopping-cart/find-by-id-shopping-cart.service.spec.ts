import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdShoppingCartService } from './find-by-id-shopping-cart.service';

describe('FindByIdShoppingCartService', () => {
  let service: FindByIdShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdShoppingCartService],
    }).compile();

    service = module.get<FindByIdShoppingCartService>(
      FindByIdShoppingCartService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
