import { ObjectType, PickType } from '@nestjs/graphql';
import { SmsToken } from '../entities/smsToken.entity';
import { Column } from 'typeorm';

@ObjectType()
export class SmsTokenOutput extends PickType(SmsToken, ['isAuth', 'isValid']) {
  @Column()
  statusCode: number;
}
