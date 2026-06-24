import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsOptional, IsPositive, Max, Min } from 'class-validator'
import { Sort } from '../enums'

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @Min(1)
  page?: number = 1

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsPositive()
  @Max(100)
  limit?: number = 20

  @IsOptional()
  @IsEnum(Sort)
  sort?: Sort
}
