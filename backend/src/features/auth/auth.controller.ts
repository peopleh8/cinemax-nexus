import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './dto'
import type { Request, Response } from 'express'
import { Authorized } from 'src/common/decorators'
import type { AuthorizedUser } from 'src/common/types'
import { SessionGuard } from 'src/common/guards'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserResponseDto } from './dto/response/user-response.dto'
import { LogoutResponseDto } from './dto/response/logout-response.dto'

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({
    description: 'The user has been successfully registered',
    type: UserResponseDto,
  })
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: RegisterDto, @Req() request: Request, @Res({ passthrough: true }) response: Response) {
    return this.authService.register(dto, request, response)
  }

  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiOkResponse({
    description: 'The user has been successfully logged in',
    type: UserResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto, @Req() request: Request, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(dto, request, response)
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout a user' })
  @ApiOkResponse({
    description: 'The user has been successfully logged out',
    type: LogoutResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  logout(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    return this.authService.logout(request, response)
  }

  @Get('me')
  @UseGuards(SessionGuard)
  @ApiOperation({ summary: 'Get the currently authenticated user' })
  @ApiOkResponse({
    description: 'The currently authenticated user',
    type: UserResponseDto,
  })
  @HttpCode(HttpStatus.OK)
  me(@Authorized() user: AuthorizedUser) {
    return user
  }
}
