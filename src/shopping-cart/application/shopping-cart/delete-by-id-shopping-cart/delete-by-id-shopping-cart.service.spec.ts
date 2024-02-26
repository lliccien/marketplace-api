import { Test, TestingModule } from '@nestjs/testing';
import { DeleteByIdShoppingCartService } from './delete-by-id-shopping-cart.service';

describe('DeleteByIdShoppingCartService', () => {
  let service: DeleteByIdShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteByIdShoppingCartService],
    }).compile();

    service = module.get<DeleteByIdShoppingCartService>(
      DeleteByIdShoppingCartService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
