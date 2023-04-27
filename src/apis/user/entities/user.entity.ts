import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  // social_type + social token 내 고유 ID 값
  @PrimaryGeneratedColumn('uuid', { comment: '고유 번호' })
  @Field(() => String)
  id: string;

  // 없애도 될 것 같다.
  @Column({ comment: '회원 ID' })
  @Field(() => String)
  userId: string;

  // @Column({ comment: '회원 비밀번호' })
  // // @Field(() => String)
  // pwd: string;

  // @Column({ comment: '회원 이름', default: '' })
  // @Field(() => String)
  // userName: string;

  // 추가 정보 입력 화면에서 받는 데이터
  @Column({ comment: '회원 닉네임', default: '' })
  @Field(() => String)
  nick: string;

  // 추가 정보 입력 화면에서 받는 데이터
  @Column({ comment: '회원 생일', default: '' })
  @Field(() => String)
  birthday: string;

  // sms 인증 시 저장될 데이터
  @Column({ comment: '회원 휴대폰 번호', default: '' })
  @Field(() => String)
  phone: string;

  // 추가 정보 입력 화면에서 받는 데이터
  @Column({
    type: 'tinyint',
    width: 1,
    comment: '회원 성별 0 남 / 1 여',
    default: 0,
  })
  @Field(() => Int)
  gender: number;

  // 처음 가입 시 토큰 받을때 저장되는 데이터
  @Column({
    type: 'tinyint',
    width: 1,
    comment: '소셜 아이디 코드 0 카카오 / 1 네이버 / 2 구글',
  })
  @Field(() => Int)
  social_type: number;

  // 과연 필요할까
  @Column({
    type: Boolean,
    comment: '회원가입 추가정보 입력 완료',
    default: false,
  })
  @Field(() => Boolean)
  isCompleted: boolean;

  @CreateDateColumn({ comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '수정일' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '삭제일' })
  deletedAt: Date;
}
