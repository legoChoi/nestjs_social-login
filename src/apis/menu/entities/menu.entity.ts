import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ comment: '메뉴 이름' })
  name: string;

  @Column({ comment: '메뉴 설명' })
  description: string;

  @Column({ comment: '메뉴 원가격' })
  price: number;

  @Column({ comment: '메뉴 할인율' })
  discountRate: number;

  @Column({ comment: '메뉴 할인 가격' })
  discountPrice: string;

  @Column({ comment: '메뉴 재고량' })
  stock: number;

  @Column({ comment: '메뉴 품절 상태' })
  isSoldout: boolean;

  @Column({ comment: '메뉴 이미지' })
  menuImg: string;
}
