import { ProductRepository } from '@Product/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateByIdProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async updateById(id: string, product: any): Promise<any> {
    return await this.productRepository.updateById(id, product);
  }
}
