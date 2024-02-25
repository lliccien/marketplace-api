import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('NestApplication');

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api');

  await app.listen(configService.get('port'), async () => {
    logger.log(`Server is running on ${await app.getUrl()}`);
  });
}
bootstrap();
