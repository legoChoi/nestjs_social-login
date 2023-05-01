import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmsToken } from './entities/smsToken.entity';
import { SmsService } from './sms.service';
import { SmsResolver } from './sms.resolver';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, SmsToken])],
  providers: [
    SmsResolver, //
    SmsService,
  ],
})
export class SmsModule {}
