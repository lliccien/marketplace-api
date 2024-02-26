import { ShoppingCardDetail } from './shopping-card-detail.domain';

export interface ShoppingCardDetailRepository {
  createShoppingCardDetail(
    shoppingCardDetail: ShoppingCardDetail,
  ): Promise<ShoppingCardDetail>;
  findById(id: string): Promise<ShoppingCardDetail>;
  updateById(
    id: string,
    shoppingCardDetailUpdate: ShoppingCardDetail,
  ): Promise<ShoppingCardDetail>;
  deleteById(id: string): Promise<void>;
}
