import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common'
import { CountryService } from './country.service'
import { PaginationDto, SearchDto, SortDto } from 'src/common/dto'
import { CreateCountryDto } from './dto'
import { UpdateCountryDto } from './dto'
import { PaginationInterceptor } from 'src/common/interceptors'
import { RoleGuard, SessionGuard } from 'src/common/guards'
import { Roles } from 'src/common/decorators'
import { UserRole } from 'generated/prisma/enums'

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.countryService.findOneBySlug(slug)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query() dto: PaginationDto & SearchDto & SortDto) {
    return this.countryService.findAll(dto)
  }

  @Post()
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto)
  }

  @Put(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  update(@Param('slug') slug: string, @Body() dto: UpdateCountryDto) {
    return this.countryService.update(slug, dto)
  }

  @Delete(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  delete(@Param('slug') slug: string) {
    return this.countryService.delete(slug)
  }
}
