import { Field, Float, ObjectType } from '@nestjs/graphql';
import { User } from 'src/apis/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  Point,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class UserPosition {
  @PrimaryGeneratedColumn({ comment: '유저 위치 ID' })
  @Field(() => String)
  id: string;

  @Column({
    type: 'decimal',
    precision: 18,
    scale: 10,
    comment: '위도',
  })
  @Field(() => Float)
  lat: number;

  @Column({
    type: 'decimal',
    precision: 18,
    scale: 10,
    comment: '위도',
  })
  @Field(() => Float)
  lng: number;

  //   @Column({
  //     type: 'point',
  //   })
  //   point: Point;

  @Column({
    type: 'tinyint',
    width: 1,
    comment: '현재 설정 위치',
    default: false,
  })
  @Field(() => Boolean)
  isSelected: boolean;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;
}
