import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { generalConfig } from '@Config/general.config';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [generalConfig],
    }),
    DatabaseModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
