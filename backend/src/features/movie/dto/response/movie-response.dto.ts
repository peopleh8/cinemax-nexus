import { ApiProperty } from '@nestjs/swagger'
import { MovieStatus } from 'generated/prisma/enums'
import { MovieCreditsResponseDto } from './movie-credits-response.dto'
import { GenreResponseDto } from 'src/features/genre/dto/response'
import { CountryResponseDto } from 'src/features/country/dto/response'
import { MoviePosterResponseDto } from './movie-poster-response.dto'

export class MovieResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the movie',
    example: 1,
  })
  id!: number

  @ApiProperty({
    description: 'The slug of the movie',
    example: 'inception',
  })
  slug!: string

  @ApiProperty({
    description: 'The title of the movie',
    example: 'Inception',
  })
  title!: string

  @ApiProperty({
    description: 'The original title of the movie',
    example: 'Inception',
  })
  originalTitle!: string

  @ApiProperty({
    description: 'A short excerpt of the movie',
    example: 'A mind-bending thriller...',
  })
  excerpt!: string

  @ApiProperty({
    description: 'The full description of the movie',
    example: 'Inception is a 2010 science fiction action film...',
  })
  description!: string

  @ApiProperty({
    description: 'The release date of the movie',
    example: '2010-07-16',
  })
  releaseDate!: Date

  @ApiProperty({
    description: 'The release year of the movie',
    example: 2010,
  })
  releaseYear!: number

  @ApiProperty({
    description: 'The duration of the movie in minutes',
    example: 148,
  })
  duration!: number

  @ApiProperty({
    description: 'The age rating of the movie',
    example: 'PG-13',
  })
  ageRating!: string

  @ApiProperty({
    description: 'The status of the movie',
    example: MovieStatus.PUBLISHED,
  })
  status!: MovieStatus

  @ApiProperty({
    description: 'The average rating of the movie',
    example: 8.8,
  })
  ratingAverage!: number

  @ApiProperty({
    description: 'The number of ratings for the movie',
    example: 1200,
  })
  ratingCount!: number

  @ApiProperty({
    description: 'The number of reviews for the movie',
    example: 300,
  })
  reviewCount!: number

  @ApiProperty({
    description: 'Whether the movie is featured',
    example: true,
  })
  isFeatured!: boolean

  @ApiProperty({
    description: 'The publication date of the movie',
    example: '2010-07-16T00:00:00.000Z',
  })
  publishedAt!: Date

  @ApiProperty({
    description: 'The creation date of the movie record',
    example: '2010-07-16T00:00:00.000Z',
  })
  createdAt!: Date

  @ApiProperty({
    description: 'The last update date of the movie record',
    example: '2010-07-16T00:00:00.000Z',
  })
  updatedAt!: Date

  @ApiProperty({
    description: 'The credits associated with the movie',
    type: [MovieCreditsResponseDto],
  })
  credits!: MovieCreditsResponseDto[]

  @ApiProperty({
    description: 'The genres associated with the movie',
    type: [GenreResponseDto],
  })
  genres!: GenreResponseDto[]

  @ApiProperty({
    description: 'The countries associated with the movie',
    type: [CountryResponseDto],
  })
  countries!: CountryResponseDto[]

  @ApiProperty({
    description: 'The poster associated with the movie',
    type: MoviePosterResponseDto,
  })
  poster!: MoviePosterResponseDto
}
