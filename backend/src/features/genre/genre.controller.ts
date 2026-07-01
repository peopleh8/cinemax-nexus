import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { GenreService } from './genre.service'
import { QueryDto } from 'src/common/dto'
import { CreateGenreDto } from './dto'
import { UpdateGenreDto } from './dto'
import { PaginationInterceptor } from 'src/common/interceptors'
import { RoleGuard, SessionGuard } from 'src/common/guards'
import { ApiPaginatedResponse, Roles } from 'src/common/decorators'
import { UserRole } from 'generated/prisma/enums'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { GenreResponseDto } from './dto/response'

@Controller('genres')
@ApiTags('Genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get(':slug')
  @ApiOperation({ summary: 'Get a genre by slug' })
  @ApiOkResponse({ type: GenreResponseDto, description: 'The genre has been successfully retrieved.' })
  @HttpCode(HttpStatus.OK)
  findOneBySlug(@Param('slug') slug: string) {
    return this.genreService.findOneBySlug(slug)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  @ApiOperation({ summary: 'Get all genres' })
  @ApiPaginatedResponse(GenreResponseDto, 'The genres have been successfully retrieved.')
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: QueryDto) {
    return this.genreService.findAll(query)
  }

  @Post()
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Create a new genre' })
  @ApiCreatedResponse({ type: GenreResponseDto, description: 'The genre has been successfully created.' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateGenreDto) {
    return this.genreService.create(dto)
  }

  @Put(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Update a genre by slug' })
  @ApiOkResponse({ type: GenreResponseDto, description: 'The genre has been successfully updated.' })
  @HttpCode(HttpStatus.OK)
  update(@Param('slug') slug: string, @Body() dto: UpdateGenreDto) {
    return this.genreService.update(slug, dto)
  }

  @Delete(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Delete a genre by slug' })
  @ApiOkResponse({ type: GenreResponseDto, description: 'The genre has been successfully deleted.' })
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('slug') slug: string) {
    return this.genreService.delete(slug)
  }
}
