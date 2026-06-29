import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors } from '@nestjs/common'
import { PersonService } from './person.service'
import { PaginationDto, SearchDto, SortDto } from 'src/common/dto'
import { CreatePersonDto } from './dto'
import { UpdatePersonDto } from './dto'
import { PaginationInterceptor } from 'src/common/interceptors'

@Controller('people')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.personService.findOneBySlug(slug)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query() query: PaginationDto & SearchDto & SortDto) {
    return this.personService.findAll(query)
  }

  @Post()
  create(@Body() dto: CreatePersonDto) {
    return this.personService.create(dto)
  }

  @Put(':slug')
  update(@Param('slug') slug: string, @Body() dto: UpdatePersonDto) {
    return this.personService.update(slug, dto)
  }

  @Delete(':slug')
  delete(@Param('slug') slug: string) {
    return this.personService.delete(slug)
  }
}
