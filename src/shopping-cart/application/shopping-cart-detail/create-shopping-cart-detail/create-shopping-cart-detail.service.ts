import { FindByIdShoppingCartService } from '@ShoppingCart/application/shopping-cart/find-by-id-shopping-cart/find-by-id-shopping-cart.service';
import { ShoppingCartDetail } from '@ShoppingCart/domain/shopping-cart-detail.domain';
import { ShoppingCartDetailRepository } from '@ShoppingCart/domain/shopping-cart-detail.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateShoppingCartDetailService {
  constructor(
    @Inject('IShoppingCartDetailRepository')
    private readonly shoppingCartRepository: ShoppingCartDetailRepository,
    private readonly findByIdShoppingCartService: FindByIdShoppingCartService,
  ) {}
  async execute(
    shoppingCartDetail: ShoppingCartDetail,
  ): Promise<ShoppingCartDetail> {
    const shoppingCartId = `${shoppingCartDetail.shoppingCart}`;
    const shoppingCart =
      await this.findByIdShoppingCartService.execute(shoppingCartId);

    const productFound = shoppingCart.shoppingCartDetails.some(
      (product) => product.productId === shoppingCartDetail.productId,
    );

    if (productFound) {
      throw new Error('Product already exists in the shopping cart');
    }

    return await this.shoppingCartRepository.createShoppingCartDetail({
      shoppingCart,
      ...shoppingCartDetail,
    });
  }
}
