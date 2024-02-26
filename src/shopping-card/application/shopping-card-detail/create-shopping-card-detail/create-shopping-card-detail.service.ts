import { FindByIdShoppingCardService } from '@ShoppingCard/application/shopping-card/find-by-id-shopping-card/find-by-id-shopping-card.service';
import { ShoppingCardDetailDto } from '@ShoppingCard/controllers/dtos/shopping-card-detail.dto';
import { ShoppingCardDetail } from '@ShoppingCard/domain/shopping-card-detail.domain';
import { ShoppingCardDetailRepository } from '@ShoppingCard/domain/shopping-card-detail.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateShoppingCardDetailService {
  constructor(
    @Inject('IShoppingCardDetailRepository')
    private readonly shoppingCardRepository: ShoppingCardDetailRepository,
    private readonly findByIdShoppingCardService: FindByIdShoppingCardService,
  ) {}
  async execute(
    shoppingCardDetail: ShoppingCardDetail,
  ): Promise<ShoppingCardDetail> {
    const shoppingCardId = `${shoppingCardDetail.shoppingCard}`;
    const shoppingCard =
      await this.findByIdShoppingCardService.execute(shoppingCardId);

    const productFound = shoppingCard.shoppingCardDetails.some(
      (product) => product.productId === shoppingCardDetail.productId,
    );

    if (productFound) {
      throw new Error('Product already exists in the shopping card');
    }

    return await this.shoppingCardRepository.createShoppingCardDetail({
      shoppingCard,
      ...shoppingCardDetail,
    });
  }
}
