import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class SearchDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  search!: string
}
