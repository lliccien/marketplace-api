import { ShoppingCartRepository } from '@ShoppingCart/domain/shopping-cart.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteByIdShoppingCartService {
  constructor(
    @Inject('IShoppingCartRepository')
    private readonly shoppingCartRepository: ShoppingCartRepository,
  ) {}
  async execute(id: string): Promise<void> {
    return await this.shoppingCartRepository.deleteById(id);
  }
}
