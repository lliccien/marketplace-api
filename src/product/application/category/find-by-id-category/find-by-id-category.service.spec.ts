import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdCategoryService } from './find-by-id-category.service';

describe('FindByIdCategoryService', () => {
  let service: FindByIdCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindByIdCategoryService],
    }).compile();

    service = module.get<FindByIdCategoryService>(FindByIdCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
