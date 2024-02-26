import { ShoppingCardRepository } from '@ShoppingCard/domain/shopping-card.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteByIdShoppingCardService {
  constructor(
    @Inject('IShoppingCardRepository')
    private readonly shoppingCardRepository: ShoppingCardRepository,
  ) {}
  async execute(id: string): Promise<void> {
    return await this.shoppingCardRepository.deleteById(id);
  }
}
