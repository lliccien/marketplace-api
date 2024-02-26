import { Test, TestingModule } from '@nestjs/testing';
import { FindProductsByCategoryIdService } from './find-products-by-category-id.service';

describe('FindProductsByCategoryIdService', () => {
  let service: FindProductsByCategoryIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindProductsByCategoryIdService],
    }).compile();

    service = module.get<FindProductsByCategoryIdService>(
      FindProductsByCategoryIdService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
