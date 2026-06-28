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
  @Type(() => Number)
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
  @Type(() => Boolean)
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

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateMovieCreditInputDto)
  @ArrayUnique((credit: CreateMovieCreditInputDto) => `${credit.personId}-${credit.role}`)
  credits!: CreateMovieCreditInputDto[]
}
