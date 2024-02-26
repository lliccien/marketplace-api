import { ShoppingCardDetail } from './shoppinfg-card-detail';
import { Status } from './status.enum';

export class ShoppingCard {
  id?: string;
  userId?: string;
  status: Status;
  total?: number;
  createdAt?: Date;
  updatedAt?: Date;
  shoppingCardDetails: ShoppingCardDetail[];

  static create(data: ShoppingCard): ShoppingCard {
    return Object.assign(new ShoppingCard(), data);
  }
}
