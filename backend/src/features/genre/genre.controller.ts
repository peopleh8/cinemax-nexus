import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UseInterceptors } from '@nestjs/common'
import { GenreService } from './genre.service'
import { PaginationDto, SearchDto, SortDto } from 'src/common/dto'
import { CreateGenreDto } from './dto'
import { UpdateGenreDto } from './dto'
import { PaginationInterceptor } from 'src/common/interceptors'
import { RoleGuard, SessionGuard } from 'src/common/guards'
import { Roles } from 'src/common/decorators'
import { UserRole } from 'generated/prisma/enums'

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.genreService.findOneBySlug(slug)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query() query: PaginationDto & SearchDto & SortDto) {
    return this.genreService.findAll(query)
  }

  @Post()
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  create(@Body() dto: CreateGenreDto) {
    return this.genreService.create(dto)
  }

  @Put(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  update(@Param('slug') slug: string, @Body() dto: UpdateGenreDto) {
    return this.genreService.update(slug, dto)
  }

  @Delete(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  delete(@Param('slug') slug: string) {
    return this.genreService.delete(slug)
  }
}
