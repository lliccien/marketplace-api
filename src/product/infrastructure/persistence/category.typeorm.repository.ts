import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CategoryRepository } from '@Product/domain/category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from '@Common/application/mapper/mapper.service';
import { Category } from '@Product/domain/category.domain';

export class CategoryTypeOrmRepository
  extends Repository<CategoryEntity>
  implements CategoryRepository
{
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    private readonly mapperService: MapperService,
  ) {
    super(
      categoryRepository.target,
      categoryRepository.manager,
      categoryRepository.queryRunner,
    );
  }

  async createCategory(category: Category): Promise<Category> {
    const categoryCreated = await this.categoryRepository.save(category);
    return this.mapperService.entityToClass(categoryCreated, Category);
  }

  async findAll(): Promise<Category[]> {
    const categoriesFound = await this.categoryRepository.find();

    return categoriesFound.map((category) =>
      this.mapperService.entityToClass(category, Category),
    );
  }

  async findById(id: string): Promise<Category | null> {
    const categoryFound = await this.categoryRepository.findOne({
      where: { id },
    });

    if (categoryFound === null || categoryFound === undefined) {
      throw new Error('Category not found');
    }

    return this.mapperService.entityToClass(categoryFound, Category);
  }

  async updateById(id: string, newCategory: Category): Promise<Category> {
    const categoryFound = await this.categoryRepository.findOne({
      where: { id },
    });

    if (categoryFound === null || categoryFound === undefined) {
      throw new Error('Category not found');
    }

    const categoryUpdated = await this.categoryRepository.save({
      id,
      ...newCategory,
    });
    return this.mapperService.entityToClass(categoryUpdated, Category);
  }

  async deleteById(id: string): Promise<void> {
    const categoryFound = await this.categoryRepository.findOne({
      where: { id },
    });

    if (categoryFound === null || categoryFound === undefined) {
      throw new Error('Category not found');
    }

    await this.categoryRepository.delete(id);
  }
}
