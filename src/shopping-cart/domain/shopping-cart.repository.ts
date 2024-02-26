import { ShoppingCart } from './shopping-cart.domain';

export interface ShoppingCartRepository {
  createShoppingCart(shoppingCart: ShoppingCart): Promise<ShoppingCart>;
  findAll(): Promise<ShoppingCart[]>;
  findById(id: string): Promise<ShoppingCart>;
  updateById(
    id: string,
    shoppingCartUpdate: ShoppingCart,
  ): Promise<ShoppingCart>;
  deleteById(id: string): Promise<void>;
}
