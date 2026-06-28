import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsNotEmpty, IsPositive } from 'class-validator'
import { CreditRole } from 'generated/prisma/enums'

export class CreateMovieCreditInputDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  personId!: number

  @IsNotEmpty()
  @IsEnum(CreditRole)
  role!: CreditRole
}
