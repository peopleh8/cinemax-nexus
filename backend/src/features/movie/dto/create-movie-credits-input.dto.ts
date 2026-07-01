import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsNotEmpty, IsPositive } from 'class-validator'
import { CreditRole } from 'generated/prisma/enums'

export class CreateMovieCreditInputDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'The ID of the person associated with the credit',
    example: 1,
  })
  personId!: number

  @IsNotEmpty()
  @IsEnum(CreditRole)
  @ApiProperty({
    description: 'The role of the person in the movie',
    example: CreditRole.ACTOR,
  })
  role!: CreditRole
}
