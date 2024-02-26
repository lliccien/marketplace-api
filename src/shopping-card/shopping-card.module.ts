import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCardEntity } from './infrastructure/persistence/entities/shoppingCard.entity';
import { ShoppingCardDetailEntity } from './infrastructure/persistence/entities/shoppingCardDetail.entity';
import { CreateShoppingCardService } from './application/shopping-card/create-shopping-card/create-shopping-card.service';
import { UpdateByIdShoppingCardService } from './application/shopping-card/update-by-id-shopping-card/update-by-id-shopping-card.service';
import { FindByIdShoppingCardService } from './application/shopping-card/find-by-id-shopping-card/find-by-id-shopping-card.service';
import { DeleteByIdShoppingCardService } from './application/shopping-card/delete-by-id-shopping-card/delete-by-id-shopping-card.service';
import { ShoppingCardTypeormRepository } from './infrastructure/persistence/shopping-card.typeorm.repository';
import { CommonModule } from '@Common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShoppingCardEntity, ShoppingCardDetailEntity]),
    CommonModule,
  ],
  controllers: [],
  providers: [
    CreateShoppingCardService,
    UpdateByIdShoppingCardService,
    FindByIdShoppingCardService,
    DeleteByIdShoppingCardService,
    {
      provide: 'IShoppingCardRepository',
      useClass: ShoppingCardTypeormRepository,
    },
    ShoppingCardTypeormRepository,
  ],
  exports: [],
})
export class ShoppingCardModule {}
