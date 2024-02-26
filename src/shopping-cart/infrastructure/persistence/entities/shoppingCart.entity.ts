import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCartDetailEntity } from './shoppingCartDetail.entity';

@Entity({ name: 'shopping_cart' })
export class ShoppingCartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  userId: string;

  @Column()
  status: string;

  @Column({ type: 'decimal', nullable: true })
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    () => ShoppingCartDetailEntity,
    (shoppingCartDetails) => shoppingCartDetails.shoppingCart,
  )
  shoppingCartDetails: ShoppingCartDetailEntity[];
}
