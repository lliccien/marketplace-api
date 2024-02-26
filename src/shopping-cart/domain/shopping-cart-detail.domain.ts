import { ShoppingCart } from './shopping-cart.domain';

export class ShoppingCartDetail {
  id?: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  shoppingCart: ShoppingCart;

  static create(data: ShoppingCartDetail): ShoppingCartDetail {
    return Object.assign(new ShoppingCartDetail(), data);
  }
}
