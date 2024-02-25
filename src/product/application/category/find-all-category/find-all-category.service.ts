import { Category } from '@Product/domain/category.domain';
import { CategoryRepository } from '@Product/domain/category.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllCategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async execute(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }
}
