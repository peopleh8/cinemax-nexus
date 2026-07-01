import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  @ApiProperty({
    description: 'The name of the person',
    example: 'John Doe',
  })
  name!: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    description: 'A brief biography of the person',
    example: 'John Doe is an actor known for his roles in various films.',
  })
  bio?: string

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  @ApiPropertyOptional({
    description: 'The birth date of the person',
    example: '1980-01-01',
  })
  birthDate?: Date
}
