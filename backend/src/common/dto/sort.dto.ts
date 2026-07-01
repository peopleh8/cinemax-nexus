import { IsEnum, IsOptional } from 'class-validator'
import { Sort } from '../enums'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class SortDto {
  @IsOptional()
  @IsEnum(Sort)
  @ApiPropertyOptional({
    description: 'The sort order for the results',
    example: Sort.ASC,
    enum: Sort,
  })
  sort!: Sort
}
