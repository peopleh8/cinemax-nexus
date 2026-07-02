import { IntersectionType } from '@nestjs/swagger'
import { QueryDto } from 'src/common/dto'
import { MovieFilterDto } from './movie-filter.dto'

export class MovieQueryDto extends IntersectionType(IntersectionType(QueryDto, MovieFilterDto)) {}
