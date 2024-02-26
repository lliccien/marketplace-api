import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingCartDetailController } from './shopping-cart-detail.controller';

describe('ShoppingCartDetailController', () => {
  let controller: ShoppingCartDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingCartDetailController],
    }).compile();

    controller = module.get<ShoppingCartDetailController>(
      ShoppingCartDetailController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
