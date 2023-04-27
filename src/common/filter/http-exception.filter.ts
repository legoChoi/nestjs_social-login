import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log(`message : ${message}`);
    console.log(`status : ${status}`);
  }
}
