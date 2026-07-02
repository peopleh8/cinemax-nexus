import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class MovieFilterDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'Filter movies by person slug',
    example: 'john-doe',
  })
  person!: string

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'Filter movies by genre slug',
    example: 'action',
  })
  genre!: string

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'Filter movies by country slug',
    example: 'united-states',
  })
  country!: string
}
