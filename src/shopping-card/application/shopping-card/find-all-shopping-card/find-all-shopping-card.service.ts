import { ShoppingCard } from '@ShoppingCard/domain/shopping-card.domain';
import { ShoppingCardRepository } from '@ShoppingCard/domain/shopping-card.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllShoppingCardService {
  constructor(
    @Inject('IShoppingCardRepository')
    private readonly shoppingCardRepository: ShoppingCardRepository,
  ) {}

  async execute(): Promise<ShoppingCard[]> {
    return await this.shoppingCardRepository.findAll();
  }
}
