import { Category } from '@Product/domain/category.domain';
import { CategoryRepository } from '@Product/domain/category.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateByIdCategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async execute(id: string, updateCategory: Category): Promise<Category> {
    return await this.categoryRepository.updateById(id, updateCategory);
  }
}
