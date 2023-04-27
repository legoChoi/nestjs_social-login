import { ConflictException } from '@nestjs/common';
import coolsms from 'coolsms-node-sdk';
import 'dotenv/config';

export function getSmsToken6(count) {
  return String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0');
}

export async function sendSmsTokenToSMS(to, token) {
  const SMS_KEY = process.env.SMS_KEY;
  const SMS_SECRET = process.env.SMS_SECRET;
  const SMS_SENDER = process.env.SMS_SENDER;

  const messageService = new coolsms(SMS_KEY, SMS_SECRET);

  const result = await messageService.sendOne({
    to,
    from: SMS_SENDER,
    text: `[미리-테스트] 인증 번호는 [${token}] 입니다.`,
    type: 'SMS',
    autoTypeDetect: false,
  });

  console.log(result);
}
