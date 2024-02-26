import { ShoppingCard } from '@ShoppingCard/domain/shopping-card.domain';
import { ShoppingCardRepository } from '@ShoppingCard/domain/shopping-card.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateShoppingCardService {
  constructor(
    @Inject('IShoppingCardRepository')
    private readonly shoppingCardRepository: ShoppingCardRepository,
  ) {}
  async execute(shoppingCard: ShoppingCard): Promise<ShoppingCard> {
    return await this.shoppingCardRepository.createShoppingCard(shoppingCard);
  }
}
