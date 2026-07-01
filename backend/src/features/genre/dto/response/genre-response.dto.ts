import { ApiProperty } from '@nestjs/swagger'

export class GenreResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the genre',
    example: 1,
  })
  id!: number

  @ApiProperty({
    description: 'The slug of the genre',
    example: 'action',
  })
  slug!: string

  @ApiProperty({
    description: 'The name of the genre',
    example: 'Action',
  })
  name!: string

  @ApiProperty({
    description: 'The description of the genre',
    example: 'Action movies are characterized by a lot of excitement, physical activity, and fast-paced sequences.',
  })
  description?: string

  @ApiProperty({
    description: 'The date and time when the genre was created',
    example: '2023-01-01T00:00:00.000Z',
  })
  createdAt!: Date

  @ApiProperty({
    description: 'The date and time when the genre was last updated',
    example: '2023-01-01T00:00:00.000Z',
  })
  updatedAt!: Date
}
