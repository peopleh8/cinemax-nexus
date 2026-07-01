import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateCountryDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 255)
  @ApiProperty({
    description: 'The name of the country',
    example: 'United States',
  })
  name!: string
}
