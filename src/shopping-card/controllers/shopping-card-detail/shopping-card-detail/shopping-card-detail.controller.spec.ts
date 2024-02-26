import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCardDetailController } from './shopping-card-detail.controller';

describe('ShoppingCardDetailController', () => {
  let controller: ShoppingCardDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingCardDetailController],
    }).compile();

    controller = module.get<ShoppingCardDetailController>(ShoppingCardDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
