import { Repository } from 'typeorm';
import { ShoppingCartDetailEntity } from './entities/shoppingCartDetail.entity';
import { ShoppingCartDetailRepository } from '@ShoppingCart/domain/shopping-cart-detail.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from '@Common/application/mapper/mapper.service';
import { ShoppingCartDetail } from '@ShoppingCart/domain/shopping-cart-detail.domain';

export class ShoppingCartDetailTypeOrmRepository
  extends Repository<ShoppingCartDetailEntity>
  implements ShoppingCartDetailRepository
{
  constructor(
    @InjectRepository(ShoppingCartDetailEntity)
    private readonly shoppingCartDetailRepository: Repository<ShoppingCartDetailEntity>,
    private readonly mapperService: MapperService,
  ) {
    super(
      shoppingCartDetailRepository.target,
      shoppingCartDetailRepository.manager,
      shoppingCartDetailRepository.queryRunner,
    );
  }

  async createShoppingCartDetail(
    shoppingCartDetail: ShoppingCartDetail,
  ): Promise<ShoppingCartDetail> {
    const shoppingCartDetailCreated =
      await this.shoppingCartDetailRepository.save(shoppingCartDetail);
    return this.mapperService.entityToClass(
      shoppingCartDetailCreated,
      ShoppingCartDetail,
    );
  }

  async findAll(): Promise<ShoppingCartDetail[]> {
    const shoppingCartDetailsFound =
      await this.shoppingCartDetailRepository.find();
    return shoppingCartDetailsFound.map((shoppingCartDetailFound) =>
      this.mapperService.entityToClass(
        shoppingCartDetailFound,
        ShoppingCartDetail,
      ),
    );
  }

  async findById(id: string): Promise<ShoppingCartDetail> {
    const shoppingCartDetailFound =
      await this.shoppingCartDetailRepository.findOne({
        where: { id },
      });

    if (
      shoppingCartDetailFound === null ||
      shoppingCartDetailFound === undefined
    ) {
      throw new Error('Shopping cart detail not found');
    }
    return this.mapperService.entityToClass(
      shoppingCartDetailFound,
      ShoppingCartDetail,
    );
  }

  async updateById(
    id: string,
    updateShoppingCartDetail: ShoppingCartDetail,
  ): Promise<ShoppingCartDetail> {
    const shoppingCartDetailFound =
      await this.shoppingCartDetailRepository.findOne({
        where: { id },
      });

    if (
      shoppingCartDetailFound === null ||
      shoppingCartDetailFound === undefined
    ) {
      throw new Error('Shopping cart detail not found');
    }

    const shoppingCartDetailUpdated =
      await this.shoppingCartDetailRepository.save({
        id,
        ...updateShoppingCartDetail,
      });

    return this.mapperService.entityToClass(
      shoppingCartDetailUpdated,
      ShoppingCartDetail,
    );
  }

  async deleteById(id: string): Promise<void> {
    const shoppingCartDetailFound =
      await this.shoppingCartDetailRepository.findOne({
        where: { id },
      });

    if (
      shoppingCartDetailFound === null ||
      shoppingCartDetailFound === undefined
    ) {
      throw new Error('Shopping cart detail not found');
    }

    await this.shoppingCartDetailRepository.delete({ id });
  }
}
