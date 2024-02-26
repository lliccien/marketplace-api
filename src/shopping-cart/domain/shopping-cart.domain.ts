import { ShoppingCartDetail } from './shopping-cart-detail.domain';
import { Status } from './status.enum';

export class ShoppingCart {
  id?: string;
  userId?: string;
  status: Status;
  total?: number;
  createdAt?: Date;
  updatedAt?: Date;
  shoppingCartDetails?: ShoppingCartDetail[];

  static create(data: ShoppingCart): ShoppingCart {
    return Object.assign(new ShoppingCart(), data);
  }
}
