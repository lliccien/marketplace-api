import { FindByIdCategoryService } from '@Product/application/category/find-by-id-category/find-by-id-category.service';
import { ProductRepository } from '@Product/domain/product.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindProductsByCategoryIdService {
  constructor(
    @Inject('IProductRepository')
    private readonly productRepository: ProductRepository,
    private readonly findByIdCategoryService: FindByIdCategoryService,
  ) {}
  async execute(categoryId: string) {
    const categoryFound =
      await this.findByIdCategoryService.execute(categoryId);
    if (!categoryFound) {
      throw new Error('Category not found');
    }
    return await this.productRepository.findByCategoryId(categoryId);
  }
}
