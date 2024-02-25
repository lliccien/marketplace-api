import { Test, TestingModule } from '@nestjs/testing';
import { DeleteByIdCategoryService } from './delete-by-id-category.service';

describe('DeleteByIdCategoryService', () => {
  let service: DeleteByIdCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteByIdCategoryService],
    }).compile();

    service = module.get<DeleteByIdCategoryService>(DeleteByIdCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
