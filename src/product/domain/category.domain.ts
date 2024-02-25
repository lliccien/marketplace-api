import { Product } from './product.domain';

export class Category {
  id?: string;
  denomination: string;
  createdAt?: Date;
  updatedAt?: Date;
  products: Product[];

  static create(data: Category): Category {
    return Object.assign(new Category(), data);
  }
}
