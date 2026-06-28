import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { CountryService } from './country.service'
import { PaginationDto } from 'src/common/dto'
import { CreateCountryDto } from './dto'
import { UpdateCountryDto } from './dto'

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.countryService.findOneBySlug(slug)
  }

  @Get()
  findAll(@Query() dto: PaginationDto) {
    return this.countryService.findAll(dto)
  }

  @Post()
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto)
  }

  @Put(':slug')
  update(@Param('slug') slug: string, @Body() dto: UpdateCountryDto) {
    return this.countryService.update(slug, dto)
  }

  @Delete(':slug')
  delete(@Param('slug') slug: string) {
    return this.countryService.delete(slug)
  }
}
