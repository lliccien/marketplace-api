import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdProductService } from './find-by-id-product.service';

describe('FindByIdProductService', () => {
  let service: FindByIdProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdProductService],
    }).compile();

    service = module.get<FindByIdProductService>(FindByIdProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
