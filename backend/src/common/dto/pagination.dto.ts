import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsOptional, IsPositive, Max, Min } from 'class-validator'

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @Min(1)
  @ApiPropertyOptional({
    description: 'The page number to retrieve',
    example: 1,
    default: 1,
  })
  page?: number = 1

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsPositive()
  @Max(100)
  @ApiPropertyOptional({
    description: 'The number of items per page',
    example: 20,
    default: 20,
  })
  limit?: number = 20
}
