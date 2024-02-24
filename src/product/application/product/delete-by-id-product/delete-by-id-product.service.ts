import { ProductRepository } from '@Product/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteByIdProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async deleteById(id: string): Promise<void> {
    return await this.productRepository.deleteById(id);
  }
}
