export class Product {
  id?: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;

  static create(data: Product): Product {
    return Object.assign(new Product(), data);
  }
}
