import { Injectable, NotFoundException } from '@nestjs/common'
import { Genre } from 'generated/prisma/client'
import { PaginationDto } from 'src/common/dto'
import { Sort } from 'src/common/enums'
// import { createSlug } from 'src/common/utils'
import { PrismaService } from 'src/infra/prisma/prisma.service'
import { CreateGenreDto } from './dto/create-genre.dto'
import { UpdateGenreDto } from './dto/update-genre.dto'
import { generateUniqueSlug } from 'src/common/utils'

@Injectable()
export class GenreService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneBySlug(slug: string): Promise<Genre> {
    const genre = await this.prismaService.genre.findUnique({
      where: { slug },
    })

    if (!genre) {
      throw new NotFoundException(`Genre with slug "${slug}" not found`)
    }

    return genre
  }

  async findAll(dto: PaginationDto) {
    const { page = 1, limit = 20, sort = Sort.DESC } = dto
    const skip = (page - 1) * limit

    const [genres, total] = await this.prismaService.$transaction([
      this.prismaService.genre.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: sort,
        },
      }),
      this.prismaService.genre.count(),
    ])

    return {
      rows: genres,
      meta: {
        page,
        limit,
        total,
        totalPage: Math.ceil(total / limit),
      },
    }
  }

  async create(dto: CreateGenreDto): Promise<Genre> {
    const slug = await generateUniqueSlug(
      dto.name,
      async (slug) =>
        await this.prismaService.genre.findUnique({
          where: { slug },
          select: { id: true },
        }),
    )

    const genre = await this.prismaService.genre.create({
      data: {
        ...dto,
        slug,
      },
    })

    return genre
  }

  async update(slug: string, dto: UpdateGenreDto): Promise<Genre> {
    const genre = await this.findOneBySlug(slug)

    const updatedGenre = await this.prismaService.genre.update({
      where: { slug: genre.slug },
      data: {
        ...dto,
      },
    })

    return updatedGenre
  }

  async delete(slug: string): Promise<Genre> {
    const genre = await this.findOneBySlug(slug)

    const deletedGenre = await this.prismaService.genre.delete({
      where: { slug: genre.slug },
    })

    return deletedGenre
  }
}
