import { Product } from '@Product/domain/product.domain';
import { ProductRepository } from '@Product/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateByIdProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(id: string, updateProduct: Product): Promise<Product> {
    return await this.productRepository.updateById(id, updateProduct);
  }
}
