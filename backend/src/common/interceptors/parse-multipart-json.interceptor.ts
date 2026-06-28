import { BadRequestException, CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import type { Observable } from 'rxjs'

@Injectable()
export class ParseMultipartJsonInterceptor implements NestInterceptor {
  constructor(private readonly fieldName = 'data') {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<{
      body?: Record<string, unknown>
    }>()

    const value = request.body?.[this.fieldName]

    if (typeof value !== 'string') {
      throw new BadRequestException(`Field "${this.fieldName}" must be a JSON string`)
    }

    try {
      const parsed: unknown = JSON.parse(value)

      if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
        throw new BadRequestException(`Field "${this.fieldName}" must contain a JSON object`)
      }

      request.body![this.fieldName] = parsed
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error
      }

      throw new BadRequestException(`Field "${this.fieldName}" contains invalid JSON`)
    }

    return next.handle()
  }
}
