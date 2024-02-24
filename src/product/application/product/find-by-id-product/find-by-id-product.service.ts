import { ProductRepository } from '@Product/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindByIdProductService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async findById(id: string): Promise<any> {
    return await this.productRepository.findById(id);
  }
}
