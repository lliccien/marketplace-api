import { Test, TestingModule } from '@nestjs/testing';
import { UpdateByIdProductService } from './update-by-id-product.service';

describe('UpdateByIdProductService', () => {
  let service: UpdateByIdProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateByIdProductService],
    }).compile();

    service = module.get<UpdateByIdProductService>(UpdateByIdProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
