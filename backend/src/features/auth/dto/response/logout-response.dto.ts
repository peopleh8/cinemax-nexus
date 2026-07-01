import { ApiProperty } from '@nestjs/swagger'

export class LogoutResponseDto {
  @ApiProperty({
    description: 'Indicates whether the logout was successful',
    example: true,
  })
  success!: boolean
}
