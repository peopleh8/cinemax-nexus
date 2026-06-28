import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/infra/prisma/prisma.service'
import { CreateMovieDto } from './dto/create-movie.dto'
import { Movie, MovieStatus } from 'generated/prisma/client'
import { PaginationDto } from 'src/common/dto'
import { Sort } from 'src/common/enums'
import { UpdateMovieDto } from './dto/update-movie.dto'
import { generateUniqueSlug } from 'src/common/utils'
import type { StoredFile, UploadedFile } from 'src/common/types'
import { StorageService } from 'src/infra/storage/storage.service'
import { StorageFolder } from 'src/common/constants'

@Injectable()
export class MovieService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  async findOneBySlug(slug: string, isForAdmin = false) {
    const movie = await this.prismaService.movie.findFirst({
      where: { slug, ...(isForAdmin ? {} : { status: MovieStatus.PUBLISHED }) },
      include: {
        genres: true,
        countries: true,
        credits: true,
        poster: true,
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

  async create(dto: CreateMovieDto, poster?: UploadedFile): Promise<Movie> {
    const { genreIds, countryIds, credits, ...movieData } = dto

    let uploadedPoster: StoredFile | null = null

    const slug = await generateUniqueSlug(
      dto.title,
      async (slug) =>
        await this.prismaService.movie.findUnique({
          where: { slug },
          select: { id: true },
        }),
    )

    const uniqueGenres = [...new Set(genreIds)]
    const uniqueCountries = [...new Set(countryIds)]
    const uniquePeople = [...new Set(credits?.map((credit) => credit.personId))]

    const genres = await this.prismaService.genre.findMany({
      where: { id: { in: uniqueGenres } },
      select: { id: true },
    })

    const countries = await this.prismaService.country.findMany({
      where: { id: { in: uniqueCountries } },
      select: { id: true },
    })

    const people = await this.prismaService.person.findMany({
      where: { id: { in: uniquePeople } },
      select: { id: true },
    })

    if (genres.length !== uniqueGenres.length) {
      throw new NotFoundException('One or more genres not found')
    }

    if (countries.length !== uniqueCountries.length) {
      throw new NotFoundException('One or more countries not found')
    }

    if (uniquePeople.length !== people.length) {
      throw new NotFoundException('One or more people not found')
    }

    if (poster) {
      uploadedPoster = await this.storageService.uploadImage(poster, StorageFolder.MOVIE_POSTERS)
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
        credits: {
          create: credits.map((credit) => ({
            personId: credit.personId,
            role: credit.role,
          })),
        },
        ...(uploadedPoster
          ? {
              poster: {
                create: {
                  storageKey: uploadedPoster.storageKey,
                  url: uploadedPoster.url,
                },
              },
            }
          : {}),
      },
      include: {
        genres: true,
        countries: true,
        credits: true,
        poster: true,
      },
    })

    return movie
  }

  async update(slug: string, dto: UpdateMovieDto, poster?: UploadedFile): Promise<Movie> {
    const { genreIds, countryIds, credits, ...movieData } = dto

    const movie = await this.findOneBySlug(slug, true)

    const uniqueGenreIds = genreIds !== undefined ? [...new Set(genreIds)] : undefined
    const uniqueCountryIds = countryIds !== undefined ? [...new Set(countryIds)] : undefined
    const uniquePersonIds = credits !== undefined ? [...new Set(credits.map((credit) => credit.personId))] : undefined

    let uploadedPoster: StoredFile | null = null

    const [genres, countries, people] = await Promise.all([
      uniqueGenreIds !== undefined
        ? this.prismaService.genre.findMany({
            where: {
              id: {
                in: uniqueGenreIds,
              },
            },
            select: {
              id: true,
            },
          })
        : Promise.resolve(undefined),
      uniqueCountryIds !== undefined
        ? this.prismaService.country.findMany({
            where: {
              id: {
                in: uniqueCountryIds,
              },
            },
            select: {
              id: true,
            },
          })
        : Promise.resolve(undefined),
      uniquePersonIds !== undefined
        ? this.prismaService.person.findMany({
            where: {
              id: {
                in: uniquePersonIds,
              },
            },
            select: {
              id: true,
            },
          })
        : Promise.resolve(undefined),
    ])

    if (uniqueGenreIds !== undefined && genres!.length !== uniqueGenreIds.length) {
      throw new NotFoundException('One or more genres not found')
    }

    if (uniqueCountryIds !== undefined && countries!.length !== uniqueCountryIds.length) {
      throw new NotFoundException('One or more countries not found')
    }

    if (uniquePersonIds !== undefined && people!.length !== uniquePersonIds.length) {
      throw new NotFoundException('One or more people not found')
    }

    if (poster) {
      uploadedPoster = await this.storageService.uploadImage(poster, StorageFolder.MOVIE_POSTERS)
    }

    const updatedMovie = await this.prismaService.movie.update({
      where: {
        id: movie.id,
      },
      data: {
        ...movieData,
        ...(genreIds !== undefined
          ? {
              genres: {
                set: genres!,
              },
            }
          : {}),
        ...(countryIds !== undefined
          ? {
              countries: {
                set: countries!,
              },
            }
          : {}),
        ...(credits !== undefined
          ? {
              credits: {
                deleteMany: {},
                create: credits.map(({ personId, ...creditData }) => ({
                  ...creditData,
                  person: {
                    connect: {
                      id: personId,
                    },
                  },
                })),
              },
            }
          : {}),
        ...(uploadedPoster
          ? {
              poster: {
                upsert: {
                  create: {
                    ...uploadedPoster,
                  },
                  update: {
                    ...uploadedPoster,
                  },
                },
              },
            }
          : {}),
      },
      include: {
        genres: true,
        countries: true,
        credits: {
          include: {
            person: true,
          },
        },
        poster: true,
      },
    })

    if (uploadedPoster && movie?.poster?.storageKey) {
      await this.storageService.deleteFile(movie.poster.storageKey)
    }

    return updatedMovie
  }

  async delete(slug: string): Promise<Movie> {
    const movie = await this.findOneBySlug(slug, true)

    const deletedMovie = await this.prismaService.movie.delete({
      where: { slug: movie.slug },
    })

    if (movie?.poster?.storageKey) {
      await this.storageService.deleteFile(movie.poster.storageKey)
    }

    return deletedMovie
  }
}
