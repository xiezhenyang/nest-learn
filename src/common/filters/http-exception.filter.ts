import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Injectable,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Injectable()
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const resBody = exception.getResponse();
    const message =
      typeof resBody === 'string'
        ? resBody
        : (resBody as { message?: string | string[] }).message;

    response.status(status).json({
      statusCode: status,
      message: message ?? exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
