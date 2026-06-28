import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateCountryDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 255)
  name!: string
}
