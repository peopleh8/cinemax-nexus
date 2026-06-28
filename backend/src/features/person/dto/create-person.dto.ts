import { Type } from 'class-transformer'
import { IsDate, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  name!: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  bio?: string

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  birthDate?: Date
}
