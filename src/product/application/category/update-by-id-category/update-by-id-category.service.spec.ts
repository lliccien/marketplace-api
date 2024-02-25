import { Test, TestingModule } from '@nestjs/testing';
import { UpdateByIdCategoryService } from './update-by-id-category.service';

describe('UpdateByIdCategoryService', () => {
  let service: UpdateByIdCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateByIdCategoryService],
    }).compile();

    service = module.get<UpdateByIdCategoryService>(UpdateByIdCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
