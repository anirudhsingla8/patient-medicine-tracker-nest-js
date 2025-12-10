import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggingInterceptor.name);

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const { method, url, body } = request;

        this.logger.log(`Incoming Request: ${method} ${url}`);
        if (body && Object.keys(body).length > 0) {
            this.logger.log(`Payload: ${JSON.stringify(body)}`);
        }

        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() =>
                    this.logger.log(
                        `Request to ${method} ${url} completed in ${Date.now() - now}ms`,
                    ),
                ),
            );
    }
}
