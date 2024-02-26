import { Test, TestingModule } from '@nestjs/testing';
import { FindAllShoppingCartService } from './find-all-shopping-cart.service';

describe('FindAllShoppingCartService', () => {
  let service: FindAllShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllShoppingCartService],
    }).compile();

    service = module.get<FindAllShoppingCartService>(
      FindAllShoppingCartService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
