import { ApiProperty } from '@nestjs/swagger'

export class MoviePosterResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the movie poster',
    example: 1,
  })
  id!: number

  @ApiProperty({
    description: 'The ID of the movie associated with the poster',
    example: 1,
  })
  movieId!: number

  @ApiProperty({
    description: 'The URL of the movie poster',
    example: 'https://example.com/poster.jpg',
  })
  url!: string

  @ApiProperty({
    description: 'The storage key of the movie poster',
    example: 'posters/1.jpg',
  })
  storageKey!: string

  @ApiProperty({
    description: 'The date and time when the movie poster was created',
    example: '2023-01-01T00:00:00.000Z',
  })
  createdAt!: Date

  @ApiProperty({
    description: 'The date and time when the movie poster was last updated',
    example: '2023-01-01T00:00:00.000Z',
  })
  updatedAt!: Date
}
