import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { MovieService } from './movie.service'
import { CreateMovieDto, UpdateMovieDto } from './dto'
import { PaginationDto, SearchDto, SortDto } from 'src/common/dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { MAX_IMAGE_SIZE } from 'src/common/constants'
import { PaginationInterceptor, ParseMultipartJsonInterceptor } from 'src/common/interceptors'
import type { UploadedFile as UploadedFileType } from 'src/common/types'

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get(':slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.movieService.findOneBySlug(slug)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query() query: PaginationDto & SearchDto & SortDto) {
    return this.movieService.findAll(query)
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('poster', {
      limits: {
        fileSize: MAX_IMAGE_SIZE,
      },
    }),
    new ParseMultipartJsonInterceptor('data'),
  )
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
  @UseInterceptors(
    FileInterceptor('poster', {
      limits: {
        fileSize: MAX_IMAGE_SIZE,
      },
    }),
    new ParseMultipartJsonInterceptor('data'),
  )
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
  delete(@Param('slug') slug: string) {
    return this.movieService.delete(slug)
  }
}
