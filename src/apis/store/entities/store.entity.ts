import { Field, ObjectType } from '@nestjs/graphql';
import { MainCategory } from 'src/apis/mainCategory/entities/mainCategory.entity';
import { Menu } from 'src/apis/menu/entities/menu.entity';
import { StoreImage } from 'src/apis/storeImage/entities/storeImage.entity';
import { StoreTag } from 'src/apis/storeTag/entities/storeTag.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Store {
  @PrimaryGeneratedColumn('uuid', { comment: '가게 ID' })
  @Field(() => String)
  id: string;

  // @Column({ comment: '' })
  // @Field(() => String)
  // storePW: string;

  @Column({ comment: '가게 이름' })
  @Field(() => String)
  name: string;

  @OneToMany(() => Menu, (menu) => menu.store)
  @Field(() => [Menu])
  menu: Menu[];

  @OneToMany(() => MainCategory, (mainCategory) => mainCategory.store)
  @Field(() => [MainCategory])
  mainCategory: MainCategory[];

  @OneToMany(() => StoreTag, (storeTag) => storeTag.store)
  @Field(() => [StoreTag])
  storeTag: StoreTag[];

  @OneToMany(() => StoreImage, (storeImage) => storeImage.store)
  @Field(() => [StoreImage])
  storeImage: StoreImage[];

  // @Column({})
  // @Field(() => String)
  // owner: string;

  // @Column({})
  // @Field(() => String)
  // registrationNo: string;

  // @Column({})
  // @Field(() => String)
  // storeCall: string;

  // @Column({})
  // @Field(() => String)
  // ownerCall: string;

  // @Column({})
  // @Field(() => String)
  // address: string;

  // @Column({})
  // @Field(() => String)
  // sns: string;

  // @Column({})
  // @Field(() => String)
  // operationTime: string;

  // @Column({})
  // @Field(() => String)
  // dayOff: string;

  // @Column({})
  // @Field(() => String)
  // description: string;

  // @Column({})
  // @Field(() => String)
  // notice: string;

  // @Column({})
  // @Field(() => String)
  // service: string;

  // @Column({ comment: '지연시간 1' })
  // @Field(() => Number)
  // shortDelayTime: number;

  // @Column({ comment: '지연시간 2' })
  // @Field(() => Number)
  // mediumDelayTime: number;

  // @Column({ comment: '지연시간 3' })
  // @Field(() => Number)
  // longDelayTime: number;

  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;

  // @DeleteDateColumn()
  // deletedAt: Date;
}
