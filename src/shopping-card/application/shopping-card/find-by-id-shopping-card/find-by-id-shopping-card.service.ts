import { ShoppingCard } from '@ShoppingCard/domain/shopping-card.domain';
import { ShoppingCardRepository } from '@ShoppingCard/domain/shopping-card.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindByIdShoppingCardService {
  constructor(
    @Inject('IShoppingCardRepository')
    private readonly shoppingCardRepository: ShoppingCardRepository,
  ) {}
  async execute(id: string): Promise<ShoppingCard> {
    return await this.shoppingCardRepository.findById(id);
  }
}
