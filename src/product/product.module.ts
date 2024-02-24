import { Module } from '@nestjs/common';
import { CreateProductService } from './application/product/create-product/create-product.service';
import { FindAllProductsService } from './application/product/find-all-products/find-all-products.service';
import { FindByIdProductService } from './application/product/find-by-id-product/find-by-id-product.service';
import { UpdateByIdProductService } from './application/product/update-by-id-product/update-by-id-product.service';
import { DeleteByIdProductService } from './application/product/delete-by-id-product/delete-by-id-product.service';
import { ProductTypeOrmRepository } from './infrastructure/product.typeorm.repository';

@Module({
  providers: [
    CreateProductService,
    FindAllProductsService,
    FindByIdProductService,
    UpdateByIdProductService,
    DeleteByIdProductService,
    {
      provide: 'IProductRepository',
      useClass: ProductTypeOrmRepository,
    },
  ],
})
export class ProductModule {}
