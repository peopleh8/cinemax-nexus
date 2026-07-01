import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class ResponsePersonDto {
  @ApiProperty({ example: 5 })
  id!: number

  @ApiProperty({ example: 'john-doe' })
  slug!: string

  @ApiProperty({ example: 'John Doe' })
  name!: string

  @ApiPropertyOptional({
    nullable: true,
    example:
      'John Doe is a fictional character often used to represent an anonymous person or a placeholder name in legal proceedings, medical cases, and other contexts where the true identity of an individual is unknown or must be withheld.',
  })
  bio!: string | null

  @ApiPropertyOptional({
    type: String,
    format: 'date',
    nullable: true,
    example: '1974-11-11',
  })
  birthDate!: Date | null

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  createdAt!: Date

  @ApiProperty({
    type: String,
    format: 'date-time',
  })
  updatedAt!: Date
}
