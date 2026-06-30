import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AuthorizedUser } from '../types'
import { Reflector } from '@nestjs/core'
import { ROLES_KEY } from '../decorators'
import { UserRole } from 'generated/prisma/enums'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (!requiredRoles) {
      return true
    }

    const request = context.switchToHttp().getRequest() as Request & {
      user?: AuthorizedUser
    }
    const user = request.user as AuthorizedUser | undefined

    if (user && user.role.includes(UserRole.ADMIN)) {
      return true
    }

    if (!user || !user.role.some((role) => requiredRoles.includes(role))) {
      throw new ForbiddenException('You do not have permission to perform this action')
    }

    return true
  }
}
