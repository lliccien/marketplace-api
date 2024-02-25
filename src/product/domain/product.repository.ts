import { Product } from './product.domain';

export interface ProductRepository {
  createProduct(product: Product): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  updateById(id: string, newProduct: Product): Promise<Product>;
  deleteById(id: string): Promise<void>;
  searchByNameOrDescription(term: string): Promise<Product[]>;
}
