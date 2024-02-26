import { ShoppingCart } from '@ShoppingCart/domain/shopping-cart.domain';
import { IsNumber, IsUUID } from 'class-validator';

export class ShoppingCartDetailDto {
  @IsUUID()
  shoppingCart: ShoppingCart;

  @IsUUID()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
