import { IntersectionType } from '@nestjs/swagger'
import { PaginationDto, SearchDto, SortDto } from './'

export class QueryDto extends IntersectionType(IntersectionType(PaginationDto, SearchDto, SortDto)) {}
