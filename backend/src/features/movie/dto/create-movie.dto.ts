import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
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
} from 'class-validator'
import { MovieStatus } from 'generated/prisma/enums'

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  title!: string

  @IsOptional()
  @IsString()
  @Length(1, 255)
  originalTitle!: string

  @IsOptional()
  @IsString()
  description!: string

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  releaseDate!: Date

  @IsOptional()
  @IsInt()
  @IsPositive()
  releaseYear!: number

  @IsOptional()
  @IsString()
  @Length(1, 10)
  ageRating!: string

  @IsOptional()
  @IsEnum(MovieStatus)
  status!: MovieStatus

  @IsOptional()
  @IsBoolean()
  isFeatured!: boolean

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  @IsPositive({ each: true })
  genreIds!: number[]

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  @IsPositive({ each: true })
  countryIds!: number[]
}
