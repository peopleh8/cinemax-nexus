import { ApiProperty } from '@nestjs/swagger'
import { UserRole } from 'generated/prisma/enums'

export class UserResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: 1,
  })
  id!: number

  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@example.com',
  })
  email!: string

  @ApiProperty({
    description: 'The role of the user',
    enum: [UserRole],
    example: [UserRole.USER],
  })
  role!: UserRole[]

  @ApiProperty({
    description: 'The date and time when the user was created',
    example: '2023-01-01T00:00:00.000Z',
  })
  createdAt!: Date

  @ApiProperty({
    description: 'The date and time when the user was last updated',
    example: '2023-01-01T00:00:00.000Z',
  })
  updatedAt!: Date
}
