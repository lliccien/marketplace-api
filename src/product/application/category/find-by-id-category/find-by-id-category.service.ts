import { Category } from '@Product/domain/category.domain';
import { CategoryRepository } from '@Product/domain/category.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindByIdCategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async execute(id: string): Promise<Category> {
    return await this.categoryRepository.findById(id);
  }
}
