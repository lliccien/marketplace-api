import { ShoppingCardDetail } from './shopping-card-detail.domain';

export interface ShoppingCardDetailRepository {
  createShoppingCardDetail(
    shoppingCardDetail: ShoppingCardDetail,
  ): Promise<ShoppingCardDetail>;
  findAll(): Promise<ShoppingCardDetail[]>;
  findById(id: string): Promise<ShoppingCardDetail>;
  updateById(
    id: string,
    updateShoppingCardDetail: ShoppingCardDetail,
  ): Promise<ShoppingCardDetail>;
  deleteById(id: string): Promise<void>;
}
