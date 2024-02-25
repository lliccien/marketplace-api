import { Category } from '@Product/domain/category.domain';
import { CategoryRepository } from '@Product/domain/category.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateCategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async execute(category: Category): Promise<Category> {
    return await this.categoryRepository.createCategory(category);
  }
}
