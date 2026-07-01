import { ApiProperty } from '@nestjs/swagger'
import { CreditRole } from 'generated/prisma/enums'

export class MovieCreditsResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the movie credit',
    example: 1,
  })
  id!: number

  @ApiProperty({
    description: 'The ID of the movie associated with the credit',
    example: 1,
  })
  movieId!: number

  @ApiProperty({
    description: 'The ID of the person associated with the credit',
    example: 1,
  })
  personId!: number

  @ApiProperty({
    description: 'The role of the person in the movie',
    example: CreditRole.ACTOR,
  })
  role!: CreditRole
}
