import { ApiProperty } from '@nestjs/swagger'

export class CountryResponseDto {
  @ApiProperty({
    description: 'The unique identifier of the country',
    example: 1,
  })
  id!: number

  @ApiProperty({
    description: 'The slug of the country',
    example: 'united-states',
  })
  slug!: string

  @ApiProperty({
    description: 'The name of the country',
    example: 'United States',
  })
  name!: string

  @ApiProperty({
    description: 'The code of the country',
    example: 'US',
  })
  code!: string

  @ApiProperty({
    description: 'The creation date of the country',
    example: '2023-01-01T00:00:00.000Z',
  })
  createdAt!: Date

  @ApiProperty({
    description: 'The last update date of the country',
    example: '2023-01-01T00:00:00.000Z',
  })
  updatedAt!: Date
}
