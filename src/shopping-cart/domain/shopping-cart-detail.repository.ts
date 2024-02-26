import { ShoppingCartDetail } from './shopping-cart-detail.domain';

export interface ShoppingCartDetailRepository {
  createShoppingCartDetail(
    shoppingCartDetail: ShoppingCartDetail,
  ): Promise<ShoppingCartDetail>;
  findAll(): Promise<ShoppingCartDetail[]>;
  findById(id: string): Promise<ShoppingCartDetail>;
  updateById(
    id: string,
    updateShoppingCartDetail: ShoppingCartDetail,
  ): Promise<ShoppingCartDetail>;
  deleteById(id: string): Promise<void>;
}
