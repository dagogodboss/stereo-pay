import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export default class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((...args) => {
        return {
          status: 'success',
          message: 'Operation was successful', // a nice success or error message
          data: args[0].data ?? args[0],
        };
      }),
    );
  }
}
