import { Module } from '@nestjs/common';
import { CreateProductService } from './application/product/create-product/create-product.service';
import { FindAllProductsService } from './application/product/find-all-products/find-all-products.service';
import { FindByIdProductService } from './application/product/find-by-id-product/find-by-id-product.service';
import { UpdateByIdProductService } from './application/product/update-by-id-product/update-by-id-product.service';
import { DeleteByIdProductService } from './application/product/delete-by-id-product/delete-by-id-product.service';
import { ProductTypeOrmRepository } from './infrastructure/persistence/product.typeorm.repository';
import { ProductController } from './controllers/product/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './infrastructure/persistence/entities/product.entity';
import { MapperService } from '@Common/application/mapper/mapper.service';
import { CommonModule } from '@Common/common.module';
import { SearchByNameOrDescriptionService } from './application/product/search-by-name-or-description/search-by-name-or-description.service';
import { CreateCategoryService } from './application/category/create-category/create-category.service';
import { FindAllCategoryService } from './application/category/find-all-category/find-all-category.service';
import { FindByIdCategoryService } from './application/category/find-by-id-category/find-by-id-category.service';
import { UpdateByIdCategoryService } from './application/category/update-by-id-category/update-by-id-category.service';
import { DeleteByIdCategoryService } from './application/category/delete-by-id-category/delete-by-id-category.service';
import { CategoryTypeOrmRepository } from './infrastructure/persistence/category.typeorm.repository';
import { CategoryEntity } from './infrastructure/persistence/entities/category.entity';
import { CategoryController } from './controllers/category/category.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, CategoryEntity]),
    CommonModule,
  ],
  providers: [
    MapperService,
    CreateProductService,
    FindAllProductsService,
    FindByIdProductService,
    UpdateByIdProductService,
    DeleteByIdProductService,
    {
      provide: 'IProductRepository',
      useClass: ProductTypeOrmRepository,
    },
    ProductTypeOrmRepository,
    SearchByNameOrDescriptionService,
    CreateCategoryService,
    FindAllCategoryService,
    FindByIdCategoryService,
    UpdateByIdCategoryService,
    DeleteByIdCategoryService,
    {
      provide: 'ICategoryRepository',
      useClass: CategoryTypeOrmRepository,
    },
    CategoryTypeOrmRepository,
  ],
  controllers: [ProductController, CategoryController],
})
export class ProductModule {}
