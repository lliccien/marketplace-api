import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCartEntity } from './shoppingCart.entity';

@Entity({ name: 'shopping_cart_detail' })
export class ShoppingCartDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productId: string;

  @Column()
  quantity: number;

  @Column({ type: 'decimal' })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    () => ShoppingCartEntity,
    (shoppingCart) => shoppingCart.shoppingCartDetails,
  )
  shoppingCart: ShoppingCartEntity;
}
