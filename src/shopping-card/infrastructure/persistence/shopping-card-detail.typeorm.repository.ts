import { Repository } from 'typeorm';
import { ShoppingCardDetailEntity } from './entities/shoppingCardDetail.entity';
import { ShoppingCardDetailRepository } from '@ShoppingCard/domain/shopping-card-detail.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from '@Common/application/mapper/mapper.service';
import { ShoppingCardDetail } from '@ShoppingCard/domain/shoppinfg-card-detail';

export class ShoppingCardDetailTypeOrmRepository
  extends Repository<ShoppingCardDetailEntity>
  implements ShoppingCardDetailRepository
{
  constructor(
    @InjectRepository(ShoppingCardDetailEntity)
    private readonly shoppingCardDetailRepository: Repository<ShoppingCardDetailEntity>,
    private readonly mapperService: MapperService,
  ) {
    super(
      shoppingCardDetailRepository.target,
      shoppingCardDetailRepository.manager,
      shoppingCardDetailRepository.queryRunner,
    );
  }

  async createShoppingCardDetail(
    shoppingCardDetail: ShoppingCardDetail,
  ): Promise<ShoppingCardDetail> {
    const shoppingCardDetailCreated =
      await this.shoppingCardDetailRepository.save(shoppingCardDetail);
    return await this.mapperService.entityToClass(
      shoppingCardDetailCreated,
      ShoppingCardDetail,
    );
  }

  async findById(id: string): Promise<ShoppingCardDetail> {
    const shoppingCardDetailFound =
      await this.shoppingCardDetailRepository.findOne({
        where: { id },
      });

    if (
      shoppingCardDetailFound === null ||
      shoppingCardDetailFound === undefined
    ) {
      throw new Error('Shopping card detail not found');
    }
    return await this.mapperService.entityToClass(
      shoppingCardDetailFound,
      ShoppingCardDetail,
    );
  }

  async updateById(
    id: string,
    shoppingCardDetailUpdate: ShoppingCardDetail,
  ): Promise<ShoppingCardDetail> {
    const shoppingCardDetailFound =
      await this.shoppingCardDetailRepository.findOne({
        where: { id },
      });

    if (
      shoppingCardDetailFound === null ||
      shoppingCardDetailFound === undefined
    ) {
      throw new Error('Shopping card detail not found');
    }

    const shoppingCardDetailUpdated = this.shoppingCardDetailRepository.save({
      id,
      ...shoppingCardDetailUpdate,
    });

    return await this.mapperService.entityToClass(
      shoppingCardDetailUpdated,
      ShoppingCardDetail,
    );
  }

  async deleteById(id: string): Promise<void> {
    const shoppingCardDetailFound =
      await this.shoppingCardDetailRepository.findOne({
        where: { id },
      });

    if (
      shoppingCardDetailFound === null ||
      shoppingCardDetailFound === undefined
    ) {
      throw new Error('Shopping card detail not found');
    }

    await this.shoppingCardDetailRepository.delete({ id });
  }
}
