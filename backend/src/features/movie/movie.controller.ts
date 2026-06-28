import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { MovieService } from './movie.service'
import { CreateMovieDto } from './dto'
import { PaginationDto } from 'src/common/dto'
import { UpdateMovieDto } from './dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { isSupportedImageMimeType, MAX_IMAGE_SIZE } from 'src/common/constants'
import { ParseMultipartJsonInterceptor } from 'src/common/interceptors'
import type { UploadedFile as UploadedFileType } from 'src/common/types'

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
  @UseInterceptors(
    FileInterceptor('poster', {
      limits: {
        fileSize: MAX_IMAGE_SIZE,
      },
      fileFilter: (_request, file, callback) => {
        if (!isSupportedImageMimeType(file.mimetype)) {
          callback(new BadRequestException('Only JPG, PNG and WEBP poster images are supported'), false)

          return
        }

        callback(null, true)
      },
    }),
    new ParseMultipartJsonInterceptor('data'),
  )
  create(@Body('data') dto: CreateMovieDto, @UploadedFile() poster?: UploadedFileType) {
    return this.movieService.create(dto, poster)
  }

  @Put(':slug')
  @UseInterceptors(
    FileInterceptor('poster', {
      limits: {
        fileSize: MAX_IMAGE_SIZE,
      },
      fileFilter: (_request, file, callback) => {
        if (!isSupportedImageMimeType(file.mimetype)) {
          callback(new BadRequestException('Only JPG, PNG and WEBP poster images are supported'), false)

          return
        }

        callback(null, true)
      },
    }),
    new ParseMultipartJsonInterceptor('data'),
  )
  update(@Param('slug') slug: string, @Body('data') dto: UpdateMovieDto, @UploadedFile() poster?: UploadedFileType) {
    return this.movieService.update(slug, dto, poster)
  }

  @Delete(':slug')
  delete(@Param('slug') slug: string) {
    return this.movieService.delete(slug)
  }
}
