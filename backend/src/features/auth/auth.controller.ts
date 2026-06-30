import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './dto'
import type { Request, Response } from 'express'
import { Authorized } from 'src/common/decorators'
import type { AuthorizedUser } from 'src/common/types'
import { SessionGuard } from 'src/common/guards'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto, @Req() request: Request, @Res({ passthrough: true }) response: Response) {
    return this.authService.register(dto, request, response)
  }

  @Post('login')
  login(@Body() dto: LoginDto, @Req() request: Request, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(dto, request, response)
  }

  @Post('logout')
  logout(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    return this.authService.logout(request, response)
  }

  @Get('me')
  @UseGuards(SessionGuard)
  me(@Authorized() user: AuthorizedUser) {
    return user
  }
}
