import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCardEntity } from './shoppingCard.entity';

@Entity({ name: 'shopping_card_detail' })
export class ShoppingCardDetailEntity {
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
    () => ShoppingCardEntity,
    (shoppingCard) => shoppingCard.shoppingCardDetails,
  )
  shoppingCard: ShoppingCardEntity;
}
