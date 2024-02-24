import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductRepository } from '../domain/product.repository';
import { Product } from '../domain/product.domain';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from '@Common/application/mapper/mapper.service';

export class ProductTypeOrmRepository
  extends Repository<ProductEntity>
  implements ProductRepository
{
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private readonly mapperService: MapperService,
  ) {
    super(
      productRepository.target,
      productRepository.manager,
      productRepository.queryRunner,
    );
  }

  async createProduct(product: Product): Promise<Product> {
    const productCreated = await this.productRepository.save(product);
    return this.mapperService.entityToClass(productCreated, Product);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id: string): Promise<Product | null> {
    const productFound = this.productRepository.findOne({ where: { id } });
    if (productFound === null || productFound === undefined) {
      throw new Error('Product not found');
    }

    return this.mapperService.entityToClass(productFound, Product);
  }

  async updateById(id: string, newProduct: Product): Promise<Product> {
    const productFound = await this.productRepository.findOne({
      where: { id },
    });

    if (productFound === null || productFound === undefined) {
      throw new Error('Product not found');
    }

    const productUpdated = await this.productRepository.save({
      id,
      ...newProduct,
    });
    return this.mapperService.entityToClass(productUpdated, Product);
  }

  async deleteById(id: string): Promise<void> {
    const productFound = await this.productRepository.findOne({
      where: { id },
    });

    if (productFound === null || productFound === undefined) {
      throw new Error('Product not found');
    }

    await this.productRepository.delete({ id });
  }
}
