import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { AuthorizedUser } from '../types'

export const Authorized = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest() as Request & {
    user?: AuthorizedUser
  }

  return data ? request.user?.[data as keyof typeof request.user] : request.user
})
