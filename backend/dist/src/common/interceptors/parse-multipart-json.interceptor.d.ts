import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import type { Observable } from 'rxjs';
export declare class ParseMultipartJsonInterceptor implements NestInterceptor {
    private readonly fieldName;
    constructor(fieldName?: string);
    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown>;
}
