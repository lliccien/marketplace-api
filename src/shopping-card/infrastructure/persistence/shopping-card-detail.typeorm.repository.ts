import { Repository } from 'typeorm';
import { ShoppingCardDetailEntity } from './entities/shoppingCardDetail.entity';
import { ShoppingCardDetailRepository } from '@ShoppingCard/domain/shopping-card-detail.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from '@Common/application/mapper/mapper.service';
import { ShoppingCardDetail } from '@ShoppingCard/domain/shopping-card-detail.domain';

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
    return this.mapperService.entityToClass(
      shoppingCardDetailCreated,
      ShoppingCardDetail,
    );
  }

  async findAll(): Promise<ShoppingCardDetail[]> {
    const shoppingCardDetailsFound =
      await this.shoppingCardDetailRepository.find();
    return shoppingCardDetailsFound.map((shoppingCardDetailFound) =>
      this.mapperService.entityToClass(
        shoppingCardDetailFound,
        ShoppingCardDetail,
      ),
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
    return this.mapperService.entityToClass(
      shoppingCardDetailFound,
      ShoppingCardDetail,
    );
  }

  async updateById(
    id: string,
    updateShoppingCardDetail: ShoppingCardDetail,
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

    const shoppingCardDetailUpdated =
      await this.shoppingCardDetailRepository.save({
        id,
        ...updateShoppingCardDetail,
      });

    return this.mapperService.entityToClass(
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
