import { Repository } from 'typeorm';
import { ShoppingCartEntity } from './entities/shoppingCart.entity';
import { ShoppingCartRepository } from '@ShoppingCart/domain/shopping-cart.repository';
import { ShoppingCart } from '@ShoppingCart/domain/shopping-cart.domain';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from '@Common/application/mapper/mapper.service';

export class ShoppingCartTypeormRepository
  extends Repository<ShoppingCartEntity>
  implements ShoppingCartRepository
{
  constructor(
    @InjectRepository(ShoppingCartEntity)
    private readonly shoppingCartRepository: Repository<ShoppingCartEntity>,
    private readonly mapperService: MapperService,
  ) {
    super(
      shoppingCartRepository.target,
      shoppingCartRepository.manager,
      shoppingCartRepository.queryRunner,
    );
  }

  async createShoppingCart(shoppingCart: ShoppingCart): Promise<ShoppingCart> {
    const shoppingCartCreated =
      await this.shoppingCartRepository.save(shoppingCart);
    return this.mapperService.entityToClass(shoppingCartCreated, ShoppingCart);
  }

  async findAll(): Promise<ShoppingCart[]> {
    const shoppingCartsFound = await this.shoppingCartRepository.find({
      relations: ['shoppingCartDetails'],
    });
    return shoppingCartsFound.map((shoppingCartFound) =>
      this.mapperService.entityToClass(shoppingCartFound, ShoppingCart),
    );
  }

  async findById(id: string): Promise<ShoppingCart> {
    const shoppingCartFound = await this.shoppingCartRepository.findOne({
      where: { id },
      relations: ['shoppingCartDetails'],
    });

    if (shoppingCartFound === null || shoppingCartFound === undefined) {
      throw new Error('Shopping cart not found');
    }
    return this.mapperService.entityToClass(shoppingCartFound, ShoppingCart);
  }

  async updateById(
    id: string,
    shoppingCartUpdate: ShoppingCart,
  ): Promise<ShoppingCart> {
    const shoppingCartFound = await this.shoppingCartRepository.findOne({
      where: { id },
    });

    if (shoppingCartFound === null || shoppingCartFound === undefined) {
      throw new Error('Shopping cart not found');
    }

    const shoppingCartUpdated = await this.shoppingCartRepository.save({
      id,
      ...shoppingCartUpdate,
    });

    return this.mapperService.entityToClass(shoppingCartUpdated, ShoppingCart);
  }

  async deleteById(id: string): Promise<void> {
    const shoppingCartFound = await this.shoppingCartRepository.findOne({
      where: { id },
    });

    if (shoppingCartFound === null || shoppingCartFound === undefined) {
      throw new Error('Shopping cart not found');
    }
    await this.shoppingCartRepository.delete({ id });
  }
}
