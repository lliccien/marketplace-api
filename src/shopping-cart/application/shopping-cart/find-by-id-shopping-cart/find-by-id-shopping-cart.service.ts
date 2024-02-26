import { ShoppingCart } from '@ShoppingCart/domain/shopping-cart.domain';
import { ShoppingCartRepository } from '@ShoppingCart/domain/shopping-cart.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindByIdShoppingCartService {
  constructor(
    @Inject('IShoppingCartRepository')
    private readonly shoppingCartRepository: ShoppingCartRepository,
  ) {}
  async execute(id: string): Promise<ShoppingCart> {
    return await this.shoppingCartRepository.findById(id);
  }
}
