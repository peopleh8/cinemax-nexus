import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'The email of the user',
    example: 'user@example.com',
  })
  email!: string

  @IsNotEmpty()
  @IsString()
  @Length(6, 50)
  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
  })
  password!: string
}
