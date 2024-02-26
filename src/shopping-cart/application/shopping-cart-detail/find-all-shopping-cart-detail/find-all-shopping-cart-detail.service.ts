import { ShoppingCartDetail } from '@ShoppingCart/domain/shopping-cart-detail.domain';
import { ShoppingCartDetailRepository } from '@ShoppingCart/domain/shopping-cart-detail.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllShoppingCartDetailService {
  constructor(
    @Inject('IShoppingCartDetailRepository')
    private readonly shoppingCartDetailRepository: ShoppingCartDetailRepository,
  ) {}

  async execute(): Promise<ShoppingCartDetail[]> {
    return await this.shoppingCartDetailRepository.findAll();
  }
}
