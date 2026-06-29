import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseInterceptors } from '@nestjs/common'
import { GenreService } from './genre.service'
import { PaginationDto, SearchDto, SortDto } from 'src/common/dto'
import { CreateGenreDto } from './dto'
import { UpdateGenreDto } from './dto'
import { PaginationInterceptor } from 'src/common/interceptors'

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
  create(@Body() dto: CreateGenreDto) {
    return this.genreService.create(dto)
  }

  @Put(':slug')
  update(@Param('slug') slug: string, @Body() dto: UpdateGenreDto) {
    return this.genreService.update(slug, dto)
  }

  @Delete(':slug')
  delete(@Param('slug') slug: string) {
    return this.genreService.delete(slug)
  }
}
