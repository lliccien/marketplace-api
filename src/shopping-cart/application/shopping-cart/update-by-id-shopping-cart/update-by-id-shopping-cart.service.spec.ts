import { Test, TestingModule } from '@nestjs/testing';
import { UpdateByIdShoppingCartService } from './update-by-id-shopping-cart.service';

describe('UpdateByIdShoppingCartService', () => {
  let service: UpdateByIdShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateByIdShoppingCartService],
    }).compile();

    service = module.get<UpdateByIdShoppingCartService>(
      UpdateByIdShoppingCartService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
