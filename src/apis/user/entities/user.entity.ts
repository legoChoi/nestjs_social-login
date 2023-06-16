import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Bookmark } from 'src/apis/bookmark/entities/bookmark.entity';
import { Point } from 'src/apis/point/entities/point.entity';
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
export class User {
  // social_type + social token 내 고유 ID 값
  @PrimaryGeneratedColumn('uuid', { comment: '유저 ID' })
  @Field(() => String)
  id: string;

  //
  //
  @OneToMany(() => Point, (point) => point.user)
  @Field(() => [Point])
  point: Point[];

  //
  //
  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  @Field(() => [Bookmark])
  bookmark: Bookmark[];

  // // 없애도 될 것 같다.
  // @Column({ comment: '회원 ID' })
  // @Field(() => String)
  // socialId: string;

  // sms 인증 시 저장될 데이터
  @Column({ comment: '회원 휴대폰 번호' })
  @Field(() => String)
  phone: string;

  // 추가 정보 입력 화면에서 받는 데이터
  @Column({ comment: '회원 닉네임' })
  @Field(() => String)
  nick: string;

  // 추가 정보 입력 화면에서 받는 데이터
  @Column({
    type: 'tinyint',
    width: 1,
    comment: '회원 성별 0 남 / 1 여',
    default: 0,
  })
  @Field(() => Boolean)
  gender: boolean;

  // 추가 정보 입력 화면에서 받는 데이터
  @Column({ comment: '회원 생일' })
  @Field(() => String)
  birth: string;

  // @Column({ comment: '회원 나이', default: 0 })
  // @Field(() => String)
  // age: number;

  // @Column({ comment: '회원 직업', default: '-' })
  // @Field(() => String)
  // job: string;

  // @Column({ comment: '회원 소속', default: '-' })
  // @Field(() => String)
  // company: string;

  // @Column({ comment: '회원 MBTI', default: '-' })
  // @Field(() => String)
  // mbti: string;

  // @Column({ comment: '회원 프로필 이미지', default: '-' })
  // @Field(() => String)
  // profileImgUrl: string;

  // @Column({ comment: '잔여 쿠폰 개수', default: 0 })
  // @Field(() => Number)
  // couponCnt: number;

  // @Column({ comment: '잔여 포인트', default: 0 })
  // @Field(() => Number)
  // userPoint: number;

  // @Column({
  //   type: 'tinyint',
  //   width: 1,
  //   comment: '성인인증 여부',
  //   default: false,
  // })
  // @Field(() => Boolean)
  // isAdult: boolean;

  // // 처음 가입 시 토큰 받을때 저장되는 데이터
  // @Column({
  //   type: 'tinyint',
  //   width: 1,
  //   comment: '소셜 아이디 코드 0 카카오 / 1 네이버 / 2 구글',
  // })
  // @Field(() => Int)
  // social_type: number;

  // // 과연 필요할까
  // @Column({
  //   type: Boolean,
  //   comment: '회원가입 추가정보 입력 완료',
  //   default: false,
  // })
  // @Field(() => Boolean)
  // isCompleted: boolean;

  @CreateDateColumn({ comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '수정일' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '삭제일' })
  deletedAt: Date;
}
