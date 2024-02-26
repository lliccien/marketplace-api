import { ShoppingCardDetail } from '@ShoppingCard/domain/shopping-card-detail.domain';
import { ShoppingCardDetailRepository } from '@ShoppingCard/domain/shopping-card-detail.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllShoppingCardDetailService {
  constructor(
    @Inject('IShoppingCardDetailRepository')
    private readonly shoppingCardDetailRepository: ShoppingCardDetailRepository,
  ) {}

  async execute(): Promise<ShoppingCardDetail[]> {
    return await this.shoppingCardDetailRepository.findAll();
  }
}
