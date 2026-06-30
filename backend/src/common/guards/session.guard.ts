import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import type { Request } from 'express'
import { SESSION_COOKIE_NAME } from '../constants'
import { AuthService } from 'src/features/auth/auth.service'
import type { AuthorizedUser } from '../types'

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest() as Request & {
      user?: AuthorizedUser
    }

    const sessionToken = request.cookies?.[SESSION_COOKIE_NAME]

    if (!sessionToken) {
      throw new UnauthorizedException('No session token provided')
    }

    const user = await this.authService.validateSession(sessionToken)

    if (!user) {
      throw new UnauthorizedException('Invalid session token')
    }

    request.user = user

    return true
  }
}
