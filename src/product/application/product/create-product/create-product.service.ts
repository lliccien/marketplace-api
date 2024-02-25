import { Inject, Injectable } from '@nestjs/common';

import { Product } from '@Product/domain/product.domain';
import { ProductRepository } from '@Product/domain/product.repository';

@Injectable()
export class CreateProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(product: Product): Promise<Product> {
    return await this.productRepository.createProduct(product);
  }
}
