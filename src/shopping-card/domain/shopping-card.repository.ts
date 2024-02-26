import { ShoppingCard } from './shopping-card.domain';

export interface ShoppingCardRepository {
  createShoppingCard(shoppingCard: ShoppingCard): Promise<ShoppingCard>;
  findAll(): Promise<ShoppingCard[]>;
  findById(id: string): Promise<ShoppingCard>;
  updateById(
    id: string,
    shoppingCardUpdate: ShoppingCard,
  ): Promise<ShoppingCard>;
  deleteById(id: string): Promise<void>;
}
