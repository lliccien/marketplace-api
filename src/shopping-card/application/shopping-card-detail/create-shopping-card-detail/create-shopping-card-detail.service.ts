import { CreateShoppingCardService } from '@ShoppingCard/application/shopping-card/create-shopping-card/create-shopping-card.service';
import { FindByIdShoppingCardService } from '@ShoppingCard/application/shopping-card/find-by-id-shopping-card/find-by-id-shopping-card.service';
import { ShoppingCardDetail } from '@ShoppingCard/domain/shopping-card-detail.domain';
import { ShoppingCardDetailRepository } from '@ShoppingCard/domain/shopping-card-detail.repository';
import { ShoppingCard } from '@ShoppingCard/domain/shopping-card.domain';
import { Status } from '@ShoppingCard/domain/status.enum';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateShoppingCardDetailService {
  constructor(
    @Inject('IShoppingCardRepository')
    private readonly shoppingCardRepository: ShoppingCardDetailRepository,
    private readonly findByIdShoppingCardService: FindByIdShoppingCardService,
    private readonly createShoppingCardService: CreateShoppingCardService,
  ) {}
  async execute(
    shoppingCardDetail: ShoppingCardDetail,
  ): Promise<ShoppingCardDetail> {
    const shoppingCard = await this.findByIdShoppingCardService.execute(
      shoppingCardDetail.shoppingCard.id,
    );

    if (!shoppingCard) {
      const shoppingCard = ShoppingCard.create({ status: Status.PENDING });

      const shoppingCardCreated =
        await this.createShoppingCardService.execute(shoppingCard);

      return await this.shoppingCardRepository.createShoppingCardDetail({
        shoppingCard: shoppingCardCreated,
        ...shoppingCardDetail,
      });
    }

    return await this.shoppingCardRepository.createShoppingCardDetail(
      shoppingCardDetail,
    );
  }
}
