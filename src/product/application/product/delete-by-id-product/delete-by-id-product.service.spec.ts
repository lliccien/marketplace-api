import { Test, TestingModule } from '@nestjs/testing';
import { DeleteByIdProductService } from './delete-by-id-product.service';

describe('DeleteByIdProductService', () => {
  let service: DeleteByIdProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteByIdProductService],
    }).compile();

    service = module.get<DeleteByIdProductService>(DeleteByIdProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
