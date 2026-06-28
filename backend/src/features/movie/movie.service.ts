import { Injectable, NotFoundException } from '@nestjs/common'
import { createSlug } from 'src/common/utils'
import { PrismaService } from 'src/infra/prisma/prisma.service'
import { CreateMovieDto } from './dto/create-movie.dto'
import { Movie, MovieStatus } from 'generated/prisma/client'
import { PaginationDto } from 'src/common/dto'
import { Sort } from 'src/common/enums'
import { UpdateMovieDto } from './dto/update-movie.dto'

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}

  private async getUniqueSlug(title: string) {
    const baseSlug = createSlug(title)

    let slug = baseSlug
    let counter = 2

    while (
      await this.prismaService.movie.findUnique({
        where: { slug },
        select: { id: true },
      })
    ) {
      slug = `${baseSlug}-${counter}`
      counter += 1
    }

    return slug
  }

  async findOneBySlug(slug: string, isForAdmin = false): Promise<Movie> {
    const movie = await this.prismaService.movie.findFirst({
      where: { slug, ...(isForAdmin ? {} : { status: MovieStatus.PUBLISHED }) },
      include: {
        genres: true,
        countries: true,
      },
    })

    if (!movie) {
      throw new NotFoundException(`Movie with slug "${slug}" not found`)
    }

    return movie
  }

  async findAll(dto: PaginationDto, isForAdmin = false) {
    const { page = 1, limit = 20, sort = Sort.DESC } = dto
    const skip = (page - 1) * limit

    const [movies, total] = await this.prismaService.$transaction([
      this.prismaService.movie.findMany({
        skip,
        take: limit,
        where: {
          ...(isForAdmin ? {} : { status: MovieStatus.PUBLISHED }),
        },
        orderBy: {
          createdAt: sort,
        },
      }),
      this.prismaService.movie.count({
        where: {
          ...(isForAdmin ? {} : { status: MovieStatus.PUBLISHED }),
        },
      }),
    ])

    return {
      rows: movies,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    }
  }

  async create(dto: CreateMovieDto): Promise<Movie> {
    const { genreIds, countryIds, ...movieData } = dto
    const slug = await this.getUniqueSlug(dto.title)

    const uniqueGenres = [...new Set(genreIds)]
    const uniqueCountries = [...new Set(countryIds)]

    const genres = await this.prismaService.genre.findMany({
      where: { id: { in: uniqueGenres } },
      select: { id: true },
    })

    const countries = await this.prismaService.country.findMany({
      where: { id: { in: uniqueCountries } },
      select: { id: true },
    })

    if (genres.length !== uniqueGenres.length) {
      throw new NotFoundException('One or more genres not found')
    }

    if (countries.length !== uniqueCountries.length) {
      throw new NotFoundException('One or more countries not found')
    }

    const movie = await this.prismaService.movie.create({
      data: {
        ...movieData,
        slug,
        genres: {
          connect: genres,
        },
        countries: {
          connect: countries,
        },
      },
      include: {
        genres: true,
        countries: true,
      },
    })

    return movie
  }

  async update(slug: string, dto: UpdateMovieDto): Promise<Movie> {
    const { genreIds, countryIds, ...movieData } = dto
    const movie = await this.findOneBySlug(slug, true)

    const uniqueGenres = [...new Set(genreIds)]
    const uniqueCountries = [...new Set(countryIds)]

    const genres =
      genreIds !== undefined
        ? await this.prismaService.genre.findMany({
            where: { id: { in: uniqueGenres } },
            select: { id: true },
          })
        : undefined

    const countries =
      countryIds !== undefined
        ? await this.prismaService.country.findMany({
            where: { id: { in: uniqueCountries } },
            select: { id: true },
          })
        : undefined

    if (genreIds !== undefined && genres && genres.length !== uniqueGenres.length) {
      throw new NotFoundException('One or more genres not found')
    }

    if (countryIds !== undefined && countries && countries.length !== uniqueCountries.length) {
      throw new NotFoundException('One or more countries not found')
    }

    const updatedMovie = await this.prismaService.movie.update({
      where: { slug: movie.slug },
      data: {
        ...movieData,
        ...(genres
          ? {
              genres: {
                set: genres,
              },
            }
          : {}),
        ...(countries
          ? {
              countries: {
                set: countries,
              },
            }
          : {}),
      },
      include: {
        genres: true,
        countries: true,
      },
    })

    return updatedMovie
  }

  async delete(slug: string): Promise<Movie> {
    const movie = await this.findOneBySlug(slug, true)

    const deletedMovie = await this.prismaService.movie.delete({
      where: { slug: movie.slug },
    })

    return deletedMovie
  }
}
