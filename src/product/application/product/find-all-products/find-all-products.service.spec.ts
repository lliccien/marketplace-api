import { Test, TestingModule } from '@nestjs/testing';
import { FindAllProductsService } from './find-all-products.service';

describe('FindAllProductsService', () => {
  let service: FindAllProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindAllProductsService],
    }).compile();

    service = module.get<FindAllProductsService>(FindAllProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
