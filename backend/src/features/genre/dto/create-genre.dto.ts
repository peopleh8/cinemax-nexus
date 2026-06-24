import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 255)
  name!: string

  @IsOptional()
  @IsString()
  description?: string
}
