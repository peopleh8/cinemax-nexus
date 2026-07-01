import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class SearchDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @ApiPropertyOptional({
    description: 'The search query to filter results',
    example: 'John Doe',
  })
  search!: string
}
