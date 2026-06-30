import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/infra/prisma/prisma.service'
import { LoginDto, RegisterDto } from './dto'
import * as argon2 from 'argon2'
import { createHash, randomBytes } from 'node:crypto'
import { SESSION_COOKIE_NAME, SESSION_TTL_MS } from 'src/common/constants'
import { ConfigService } from '@nestjs/config'
import type { Request, Response } from 'express'

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async register(dto: RegisterDto, request: Request, response: Response) {
    const sessionToken = request.cookies?.[SESSION_COOKIE_NAME]

    if (sessionToken) {
      throw new ConflictException('User is already logged in')
    }

    const { email, password } = dto

    const existingUser = await this.prismaService.user.findUnique({
      where: { email },
      select: { id: true },
    })

    if (existingUser) {
      throw new ConflictException('User with this email already exists')
    }

    const hashedPassword = await argon2.hash(password, {
      type: argon2.argon2id,
    })

    const user = await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
      },
      omit: {
        password: true,
      },
    })

    const session = await this.createSession(user.id)

    this.setSessionCookie(response, session.token)

    return {
      user,
    }
  }

  async login(dto: LoginDto, request: Request, response: Response) {
    const sessionToken = request.cookies?.[SESSION_COOKIE_NAME]

    if (sessionToken) {
      throw new ConflictException('User is already logged in')
    }

    const { email, password } = dto

    const user = await this.prismaService.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const isPasswordValid = await argon2.verify(user.password, password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const session = await this.createSession(user.id)

    this.setSessionCookie(response, session.token)

    return {
      ...user,
      password: undefined,
    }
  }

  async logout(request: Request, response: Response) {
    const sessionToken = request.cookies?.[SESSION_COOKIE_NAME]

    if (!sessionToken) {
      throw new UnauthorizedException('No session token provided')
    }

    await this.prismaService.session.deleteMany({
      where: {
        tokenHash: this.hashSessionToken(sessionToken),
      },
    })

    this.clearSessionCookie(response)

    return {
      success: true,
    }
  }

  async validateSession(sessionToken: string) {
    const session = await this.prismaService.session.findFirst({
      where: {
        tokenHash: this.hashSessionToken(sessionToken),
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: {
          omit: {
            password: true,
          },
        },
      },
    })

    if (!session) {
      throw new UnauthorizedException('Invalid or expired session token')
    }

    return session.user
  }

  private setSessionCookie(response: Response, sessionToken: string) {
    const isDevelopment = this.configService.getOrThrow<string>('NODE_ENV') === 'development'

    response.cookie(SESSION_COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: !isDevelopment,
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_TTL_MS,
    })
  }

  private clearSessionCookie(response: Response) {
    const isDevelopment = this.configService.getOrThrow<string>('NODE_ENV') === 'development'

    response.clearCookie(SESSION_COOKIE_NAME, {
      httpOnly: true,
      secure: !isDevelopment,
      sameSite: 'lax',
      path: '/',
    })
  }

  private async createSession(userId: number) {
    const token = randomBytes(32).toString('base64url')

    await this.prismaService.session.create({
      data: {
        userId,
        tokenHash: this.hashSessionToken(token),
        expiresAt: new Date(Date.now() + SESSION_TTL_MS),
      },
    })

    return {
      token,
    }
  }

  private hashSessionToken(token: string) {
    return createHash('sha256').update(token).digest('hex')
  }
}
