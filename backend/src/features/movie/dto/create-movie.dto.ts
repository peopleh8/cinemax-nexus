import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator'
import { MovieStatus } from 'generated/prisma/enums'
import { CreateMovieCreditInputDto } from './create-movie-credits-input.dto'
import { ApiProperty } from '@nestjs/swagger'

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  @ApiProperty({
    description: 'The title of the movie',
    example: 'Inception',
  })
  title!: string

  @IsOptional()
  @IsString()
  @Length(1, 255)
  @ApiProperty({
    description: 'The original title of the movie',
    example: 'Inception',
  })
  originalTitle!: string

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The description of the movie',
    example:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  })
  description!: string

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    description: 'The release date of the movie',
    example: '2010-07-16',
  })
  releaseDate!: Date

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @IsPositive()
  @ApiProperty({
    description: 'The release year of the movie',
    example: 2010,
  })
  releaseYear!: number

  @IsOptional()
  @IsString()
  @Length(1, 10)
  @ApiProperty({
    description: 'The age rating of the movie',
    example: 'PG-13',
  })
  ageRating!: string

  @IsOptional()
  @IsEnum(MovieStatus)
  @ApiProperty({
    description: 'The status of the movie',
    example: MovieStatus.PUBLISHED,
  })
  status!: MovieStatus

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  @ApiProperty({
    description: 'Indicates if the movie is featured',
    example: true,
  })
  isFeatured!: boolean

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ApiProperty({
    description: 'The IDs of the genres associated with the movie',
    example: [1, 2, 3],
  })
  genreIds!: number[]

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ApiProperty({
    description: 'The IDs of the countries associated with the movie',
    example: [1, 2, 3],
  })
  countryIds!: number[]

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateMovieCreditInputDto)
  @ArrayUnique((credit: CreateMovieCreditInputDto) => `${credit.personId}-${credit.role}`)
  @ApiProperty({
    description: 'The credits associated with the movie',
    type: [CreateMovieCreditInputDto],
  })
  credits!: CreateMovieCreditInputDto[]
}
