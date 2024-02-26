import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingCartEntity } from './infrastructure/persistence/entities/shoppingCart.entity';
import { ShoppingCartDetailEntity } from './infrastructure/persistence/entities/shoppingCartDetail.entity';
import { CreateShoppingCartService } from './application/shopping-cart/create-shopping-cart/create-shopping-cart.service';
import { UpdateByIdShoppingCartService } from './application/shopping-cart/update-by-id-shopping-cart/update-by-id-shopping-cart.service';
import { FindByIdShoppingCartService } from './application/shopping-cart/find-by-id-shopping-cart/find-by-id-shopping-cart.service';
import { DeleteByIdShoppingCartService } from './application/shopping-cart/delete-by-id-shopping-cart/delete-by-id-shopping-cart.service';
import { ShoppingCartTypeormRepository } from './infrastructure/persistence/shopping-cart.typeorm.repository';
import { CommonModule } from '@Common/common.module';
import { CreateShoppingCartDetailService } from './application/shopping-cart-detail/create-shopping-cart-detail/create-shopping-cart-detail.service';
import { FindByIdShoppingCartDetailService } from './application/shopping-cart-detail/find-by-id-shopping-cart-detail/find-by-id-shopping-cart-detail.service';
import { UpdateByIdShoppingCartDetailService } from './application/shopping-cart-detail/update-by-id-shopping-cart-detail/update-by-id-shopping-cart-detail.service';
import { DeleteByIdShoppingCartDetailService } from './application/shopping-cart-detail/delete-by-id-shopping-cart-detail/delete-by-id-shopping-cart-detail.service';
import { ShoppingCartDetailController } from './controllers/shopping-cart-detail/shopping-cart-detail.controller';
import { ShoppingCartController } from './controllers/shopping-cart/shopping-cart.controller';
import { ShoppingCartDetailTypeOrmRepository } from './infrastructure/persistence/shopping-cart-detail.typeorm.repository';
import { FindAllShoppingCartDetailService } from './application/shopping-cart-detail/find-all-shopping-cart-detail/find-all-shopping-cart-detail.service';
import { FindAllShoppingCartService } from './application/shopping-cart/find-all-shopping-cart/find-all-shopping-cart.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShoppingCartEntity, ShoppingCartDetailEntity]),
    CommonModule,
  ],
  controllers: [ShoppingCartDetailController, ShoppingCartController],
  providers: [
    CreateShoppingCartService,
    UpdateByIdShoppingCartService,
    FindByIdShoppingCartService,
    DeleteByIdShoppingCartService,
    {
      provide: 'IShoppingCartRepository',
      useClass: ShoppingCartTypeormRepository,
    },
    ShoppingCartTypeormRepository,
    CreateShoppingCartDetailService,
    FindByIdShoppingCartDetailService,
    UpdateByIdShoppingCartDetailService,
    DeleteByIdShoppingCartDetailService,
    {
      provide: 'IShoppingCartDetailRepository',
      useClass: ShoppingCartDetailTypeOrmRepository,
    },
    ShoppingCartDetailTypeOrmRepository,
    FindAllShoppingCartDetailService,
    FindAllShoppingCartService,
  ],
  exports: [],
})
export class ShoppingCartModule {}
