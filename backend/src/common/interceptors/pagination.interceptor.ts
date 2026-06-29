import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import type { Request } from 'express'
import { map, Observable } from 'rxjs'

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<unknown> {
    const request = context.switchToHttp().getRequest() as Request

    const { page = 1, limit = 20 } = request.query

    return next.handle().pipe(
      map(({ rows, total }) => ({
        rows,
        meta: {
          page: Number(page),
          limit: Number(limit),
          total,
          totalPages: Math.ceil(total / Number(limit)),
        },
      })),
    )
  }
}
