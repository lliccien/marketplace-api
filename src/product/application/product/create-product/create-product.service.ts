import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository } from '@Product/domain/product.repository';
import { Product } from 'src/product/domain/product.domain';

@Injectable()
export class CreateProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async createProduct(product: Product): Promise<Product> {
    return await this.productRepository.createProduct(product);
  }
}
