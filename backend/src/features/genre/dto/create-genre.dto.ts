import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 255)
  @ApiProperty({
    description: 'The name of the genre',
    example: 'Action',
  })
  name!: string

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The description of the genre',
    example: 'Action movies are characterized by a lot of excitement, physical activity, and fast-paced sequences.',
  })
  description?: string
}
