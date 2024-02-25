import { Category } from './category.domain';

export class Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  category: Category;

  static create(data: Product): Product {
    return Object.assign(new Product(), data);
  }
}
