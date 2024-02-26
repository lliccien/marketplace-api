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
    private readonly findByIdShoppingCardDetailService: FindByIdShoppingCardDetailService,
    private readonly findByIdShoppingCardService: FindByIdShoppingCardService,
    private readonly deleteByIdShoppingCardService: DeleteByIdShoppingCardService,
  ) {}
  async execute(id: string): Promise<void> {
    const shoppingCardDetailFound =
      await this.findByIdShoppingCardDetailService.execute(id);

    const shoppingCardFound = await this.findByIdShoppingCardService.execute(
      shoppingCardDetailFound.shoppingCard.id,
    );

    if (shoppingCardFound.shoppingCardDetails.length === 1) {
      await this.deleteByIdShoppingCardService.execute(shoppingCardFound.id);
    }
    return await this.shoppingCardDetailRepository.deleteById(id);
  }
}
