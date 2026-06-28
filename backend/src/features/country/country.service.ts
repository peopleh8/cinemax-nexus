import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { Country } from 'generated/prisma/client'
import { PaginationDto } from 'src/common/dto'
import { Sort } from 'src/common/enums'
import { generateUniqueSlug, getCountryCode } from 'src/common/utils'
import { PrismaService } from 'src/infra/prisma/prisma.service'
import { CreateCountryDto } from './dto/create-country.dto'
import { UpdateCountryDto } from './dto/updated-country.dto'

@Injectable()
export class CountryService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneBySlug(slug: string): Promise<Country> {
    const country = await this.prismaService.country.findUnique({
      where: { slug },
    })

    if (!country) {
      throw new NotFoundException(`Country with slug "${slug}" not found`)
    }

    return country
  }

  async findAll(dto: PaginationDto) {
    const { page = 1, limit = 20, sort = Sort.DESC } = dto
    const skip = (page - 1) * limit

    const [countries, total] = await this.prismaService.$transaction([
      this.prismaService.country.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: sort,
        },
      }),
      this.prismaService.country.count(),
    ])

    return {
      rows: countries,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    }
  }

  async create(dto: CreateCountryDto): Promise<Country> {
    const code = getCountryCode(dto.name)

    const slug = await generateUniqueSlug(
      dto.name,
      async (slug) =>
        await this.prismaService.country.findUnique({
          where: { slug },
          select: { id: true },
        }),
    )

    if (!code) {
      throw new BadRequestException(`Country code for "${dto.name}" not found`)
    }

    const country = await this.prismaService.country.create({
      data: {
        ...dto,
        slug,
        code,
      },
    })

    return country
  }

  async update(slug: string, dto: UpdateCountryDto): Promise<Country> {
    const country = await this.findOneBySlug(slug)

    const updatedCountry = await this.prismaService.country.update({
      where: { slug: country.slug },
      data: {
        ...dto,
      },
    })

    return updatedCountry
  }

  async delete(slug: string): Promise<Country> {
    const country = await this.findOneBySlug(slug)

    const deletedCountry = await this.prismaService.country.delete({
      where: { slug: country.slug },
    })

    return deletedCountry
  }
}
