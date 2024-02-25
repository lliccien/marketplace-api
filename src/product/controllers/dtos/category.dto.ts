import { Product } from '@Product/domain/product.domain';
import { IsOptional, IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  denomination: string;

  @IsOptional()
  products: Product[];
}
