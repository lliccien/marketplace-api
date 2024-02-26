import { Status } from '@ShoppingCard/domain/status.enum';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';

export class ShoppingCardDto {
  @IsOptional()
  @IsUUID()
  userId: string;

  @IsEnum(Status)
  status: Status;
}
