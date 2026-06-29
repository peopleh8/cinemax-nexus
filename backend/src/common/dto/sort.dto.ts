import { IsEnum, IsOptional } from 'class-validator'
import { Sort } from '../enums'

export class SortDto {
  @IsOptional()
  @IsEnum(Sort)
  sort!: Sort
}
