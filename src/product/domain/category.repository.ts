import { Category } from './category.domain';

export interface CategoryRepository {
  createCategory(category: Category): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  updateById(id: string, newCategory: Category): Promise<Category>;
  deleteById(id: string): Promise<void>;
}
