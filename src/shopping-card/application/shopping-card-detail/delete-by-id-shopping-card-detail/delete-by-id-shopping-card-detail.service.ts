import { ShoppingCardDetailRepository } from '@ShoppingCard/domain/shopping-card-detail.repository';
import { Inject, Injectable } from '@nestjs/common';
import { FindByIdShoppingCardDetailService } from '../find-by-id-shopping-card-detail/find-by-id-shopping-card-detail.service';
import { FindByIdShoppingCardService } from '@ShoppingCard/application/shopping-card/find-by-id-shopping-card/find-by-id-shopping-card.service';
import { DeleteByIdShoppingCardService } from '@ShoppingCard/application/shopping-card/delete-by-id-shopping-card/delete-by-id-shopping-card.service';

@Injectable()
export class DeleteByIdShoppingCardDetailService {
  constructor(
    @Inject('IShoppingCardDetailRepository')
    private readonly shoppingCardDetailRepository: ShoppingCardDetailRepository,
  ) {}
  async execute(id: string): Promise<void> {
    return await this.shoppingCardDetailRepository.deleteById(id);
  }
}
