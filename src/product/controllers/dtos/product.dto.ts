import { Category } from '@Product/domain/category.domain';
import { IsNumber, IsString, IsUUID } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsString()
  image: string;

  @IsUUID()
  category: Category;
}
