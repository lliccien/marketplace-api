import { Status } from 'src/shopping-cart/domain/status.enum';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';

export class ShoppingCartDto {
  @IsOptional()
  @IsUUID()
  userId: string;

  @IsEnum(Status)
  status: Status;
}
