import { Repository } from 'typeorm';
import { ShoppingCardEntity } from './entities/shoppingCard.entity';
import { ShoppingCardRepository } from '@ShoppingCard/domain/shopping-card.repository';
import { ShoppingCard } from '@ShoppingCard/domain/shopping-card.domain';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from '@Common/application/mapper/mapper.service';

export class ShoppingCardTypeormRepository
  extends Repository<ShoppingCardEntity>
  implements ShoppingCardRepository
{
  constructor(
    @InjectRepository(ShoppingCardEntity)
    private readonly shoppingCardRepository: Repository<ShoppingCardEntity>,
    private readonly mapperService: MapperService,
  ) {
    super(
      shoppingCardRepository.target,
      shoppingCardRepository.manager,
      shoppingCardRepository.queryRunner,
    );
  }

  async createShoppingCard(shoppingCard: ShoppingCard): Promise<ShoppingCard> {
    const shoppingCardCreated =
      await this.shoppingCardRepository.save(shoppingCard);
    return this.mapperService.entityToClass(shoppingCardCreated, ShoppingCard);
  }

  async findAll(): Promise<ShoppingCard[]> {
    const shoppingCardsFound = await this.shoppingCardRepository.find({
      relations: ['shoppingCardDetails'],
    });
    return shoppingCardsFound.map((shoppingCardFound) =>
      this.mapperService.entityToClass(shoppingCardFound, ShoppingCard),
    );
  }

  async findById(id: string): Promise<ShoppingCard> {
    const shoppingCardFound = await this.shoppingCardRepository.findOne({
      where: { id },
      relations: ['shoppingCardDetails'],
    });

    if (shoppingCardFound === null || shoppingCardFound === undefined) {
      throw new Error('Shopping card not found');
    }
    return this.mapperService.entityToClass(shoppingCardFound, ShoppingCard);
  }

  async updateById(
    id: string,
    shoppingCardUpdate: ShoppingCard,
  ): Promise<ShoppingCard> {
    const shoppingCardFound = await this.shoppingCardRepository.findOne({
      where: { id },
    });

    if (shoppingCardFound === null || shoppingCardFound === undefined) {
      throw new Error('Shopping card not found');
    }

    const shoppingCardUpdated = await this.shoppingCardRepository.save({
      id,
      ...shoppingCardUpdate,
    });

    return this.mapperService.entityToClass(shoppingCardUpdated, ShoppingCard);
  }

  async deleteById(id: string): Promise<void> {
    const shoppingCardFound = await this.shoppingCardRepository.findOne({
      where: { id },
    });

    if (shoppingCardFound === null || shoppingCardFound === undefined) {
      throw new Error('Shopping card not found');
    }
    await this.shoppingCardRepository.delete({ id });
  }
}
