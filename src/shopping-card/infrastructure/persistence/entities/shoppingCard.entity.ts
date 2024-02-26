import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCardDetailEntity } from './shoppingCardDetail.entity';

@Entity({ name: 'shopping_card' })
export class ShoppingCardEntity {
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
    () => ShoppingCardDetailEntity,
    (shoppingCardDetails) => shoppingCardDetails.shoppingCard,
  )
  shoppingCardDetails: ShoppingCardDetailEntity[];
}
