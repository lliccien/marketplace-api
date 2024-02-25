import { ProductRepository } from '@Product/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SearchByNameOrDescriptionService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(term: string): Promise<any> {
    return await this.productRepository.searchByNameOrDescription(term);
  }
}
