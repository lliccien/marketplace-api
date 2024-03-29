import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { generalConfig } from '@Config/general.config';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { CommonModule } from './common/common.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [generalConfig],
    }),
    DatabaseModule,
    ProductModule,
    CommonModule,
    ShoppingCartModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
