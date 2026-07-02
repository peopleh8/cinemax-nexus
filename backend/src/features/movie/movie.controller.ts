import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { MovieService } from './movie.service'
import { CreateMovieDto, MovieQueryDto, UpdateMovieDto } from './dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { MAX_IMAGE_SIZE } from 'src/common/constants'
import { PaginationInterceptor, ParseMultipartJsonInterceptor } from 'src/common/interceptors'
import type { UploadedFile as UploadedFileType } from 'src/common/types'
import { RoleGuard, SessionGuard } from 'src/common/guards'
import { ApiPaginatedResponse, Roles } from 'src/common/decorators'
import { UserRole } from 'generated/prisma/enums'
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiJsonFileUpload } from 'src/common/decorators/api-multipart-json-file.decorator'
import { MovieResponseDto } from './dto/response'

@Controller('movies')
@ApiTags('Movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':slug')
  @ApiOperation({ summary: 'Get a movie by slug' })
  @ApiOkResponse({ type: MovieResponseDto })
  @HttpCode(HttpStatus.OK)
  findOneBySlug(@Param('slug') slug: string) {
    return this.movieService.findOneBySlug(slug)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  @ApiOperation({ summary: 'Get all movies' })
  @ApiPaginatedResponse(MovieResponseDto, 'The movies have been successfully retrieved.')
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: MovieQueryDto) {
    return this.movieService.findAll(query)
  }

  @Post()
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @UseInterceptors(
    FileInterceptor('poster', {
      limits: {
        fileSize: MAX_IMAGE_SIZE,
      },
    }),
    new ParseMultipartJsonInterceptor('data'),
  )
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiJsonFileUpload(CreateMovieDto, {
    fileField: 'poster',
    fileDescription: 'Movie poster: JPG, PNG or WEBP.',
  })
  @ApiCreatedResponse({ type: MovieResponseDto, description: 'The movie has been successfully created.' })
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body('data') dto: CreateMovieDto,
    @UploadedFile(
      new ParseFilePipe({
        fileIsRequired: false,
        validators: [
          new FileTypeValidator({
            fileType: /^(image\/jpeg|image\/png|image\/webp)$/,
          }),
        ],
      }),
    )
    poster?: UploadedFileType,
  ) {
    return this.movieService.create(dto, poster)
  }

  @Put(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @UseInterceptors(
    FileInterceptor('poster', {
      limits: {
        fileSize: MAX_IMAGE_SIZE,
      },
    }),
    new ParseMultipartJsonInterceptor('data'),
  )
  @ApiOperation({ summary: 'Update a movie by slug' })
  @ApiJsonFileUpload(UpdateMovieDto, {
    fileField: 'poster',
    fileDescription: 'Movie poster: JPG, PNG or WEBP.',
  })
  @ApiCreatedResponse({ type: MovieResponseDto, description: 'The movie has been successfully updated.' })
  @HttpCode(HttpStatus.OK)
  update(
    @Param('slug') slug: string,
    @Body('data') dto: UpdateMovieDto,
    @UploadedFile(
      new ParseFilePipe({
        fileIsRequired: false,
        validators: [
          new FileTypeValidator({
            fileType: /^(image\/jpeg|image\/png|image\/webp)$/,
          }),
        ],
      }),
    )
    poster?: UploadedFileType,
  ) {
    return this.movieService.update(slug, dto, poster)
  }

  @Delete(':slug')
  @UseGuards(SessionGuard, RoleGuard)
  @Roles(UserRole.ADMIN, UserRole.EDITOR)
  @ApiOperation({ summary: 'Delete a movie by slug' })
  @ApiOkResponse({ type: MovieResponseDto, description: 'The movie has been successfully deleted.' })
  @HttpCode(HttpStatus.OK)
  delete(@Param('slug') slug: string) {
    return this.movieService.delete(slug)
  }
}
