import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { MovieService } from './movie.service'
import { CreateMovieDto } from './dto/create-movie.dto'
import { PaginationDto } from 'src/common/dto'
import { UpdateMovieDto } from './dto/update-movie.dto'

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.movieService.findOneBySlug(slug)
  }

  @Get()
  findAll(@Query() query: PaginationDto) {
    return this.movieService.findAll(query)
  }

  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto)
  }

  @Put(':slug')
  update(@Param('slug') slug: string, @Body() dto: UpdateMovieDto) {
    return this.movieService.update(slug, dto)
  }

  @Delete(':slug')
  delete(@Param('slug') slug: string) {
    return this.movieService.delete(slug)
  }
}
