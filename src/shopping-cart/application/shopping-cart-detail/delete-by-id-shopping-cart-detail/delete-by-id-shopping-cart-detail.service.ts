import { ShoppingCartDetailRepository } from '@ShoppingCart/domain/shopping-cart-detail.repository';
import { Inject, Injectable } from '@nestjs/common';
import { FindByIdShoppingCartDetailService } from '../find-by-id-shopping-cart-detail/find-by-id-shopping-cart-detail.service';
import { FindByIdShoppingCartService } from '@ShoppingCart/application/shopping-cart/find-by-id-shopping-cart/find-by-id-shopping-cart.service';
import { DeleteByIdShoppingCartService } from '@ShoppingCart/application/shopping-cart/delete-by-id-shopping-cart/delete-by-id-shopping-cart.service';

@Injectable()
export class DeleteByIdShoppingCartDetailService {
  constructor(
    @Inject('IShoppingCartDetailRepository')
    private readonly shoppingCartDetailRepository: ShoppingCartDetailRepository,
  ) {}
  async execute(id: string): Promise<void> {
    return await this.shoppingCartDetailRepository.deleteById(id);
  }
}
