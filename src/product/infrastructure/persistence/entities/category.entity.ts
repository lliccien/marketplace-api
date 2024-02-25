import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  denomination: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
