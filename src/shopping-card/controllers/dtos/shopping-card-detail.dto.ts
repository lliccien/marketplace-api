import { ShoppingCard } from '@ShoppingCard/domain/shopping-card.domain';
import { IsNumber, IsUUID } from 'class-validator';

export class ShoppingCardDetailDto {
  @IsUUID()
  shoppingCard: ShoppingCard;

  @IsUUID()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
