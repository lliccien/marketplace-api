export class Category {
  id?: string;
  denomination: string;
  createdAt: Date;
  updatedAt?: Date;

  static create(data: Category): Category {
    return Object.assign(new Category(), data);
  }
}
