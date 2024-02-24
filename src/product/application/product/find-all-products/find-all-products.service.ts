import { ProductRepository } from '@Product/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';
import { SearchProduct } from 'src/product/domain/interfaces/search-product.interface';

@Injectable()
export class FindAllProductsService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async findAll(query: SearchProduct): Promise<any> {
    return await this.productRepository.findAll(query);
  }
}
