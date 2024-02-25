import { CategoryRepository } from '@Product/domain/category.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeleteByIdCategoryService {
  constructor(
    @Inject('ICategoryRepository')
    private readonly categoryRepository: CategoryRepository,
  ) {}
  async execute(id: string): Promise<void> {
    return await this.categoryRepository.deleteById(id);
  }
}
