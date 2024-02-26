import { ShoppingCard } from './shopping-card.domain';

export class ShoppingCardDetail {
  id?: string;
  shoppingCardId: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  shoppingCard: ShoppingCard;

  static create(data: ShoppingCardDetail): ShoppingCardDetail {
    return Object.assign(new ShoppingCardDetail(), data);
  }
}
