import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'shopping_card_detail' })
export class ShoppingCardDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  shoppingCardId: string;

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
}
