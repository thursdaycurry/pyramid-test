import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class HttpExceptionFIlter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
