import { Test, TestingModule } from '@nestjs/testing';
import { DeleteByIdShoppingCardService } from './delete-by-id-shopping-card.service';

describe('DeleteByIdShoppingCardService', () => {
  let service: DeleteByIdShoppingCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteByIdShoppingCardService],
    }).compile();

    service = module.get<DeleteByIdShoppingCardService>(DeleteByIdShoppingCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
