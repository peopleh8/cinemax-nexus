import { Injectable, NotFoundException } from '@nestjs/common'
import { Person } from 'generated/prisma/client'
import { PaginationDto, SearchDto, SortDto } from 'src/common/dto'
import { Sort } from 'src/common/enums'
import { PrismaService } from 'src/infra/prisma/prisma.service'
import { CreatePersonDto, UpdatePersonDto } from './dto'
import { generateUniqueSlug } from 'src/common/utils'

@Injectable()
export class PersonService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOneBySlug(slug: string): Promise<Person> {
    const person = await this.prismaService.person.findUnique({
      where: { slug },
    })

    if (!person) {
      throw new NotFoundException(`Person with slug "${slug}" not found`)
    }

    return person
  }

  async findAll(dto: PaginationDto & SearchDto & SortDto) {
    const { page = 1, limit = 20, sort = Sort.DESC } = dto
    const skip = (page - 1) * limit

    const [people, total] = await this.prismaService.$transaction([
      this.prismaService.person.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: sort,
        },
      }),
      this.prismaService.person.count(),
    ])

    return {
      rows: people,
      total,
    }
  }

  async create(dto: CreatePersonDto): Promise<Person> {
    const slug = await generateUniqueSlug(
      dto.name,
      async (slug) =>
        await this.prismaService.person.findUnique({
          where: { slug },
          select: { id: true },
        }),
    )

    const person = await this.prismaService.person.create({
      data: {
        ...dto,
        slug,
      },
    })

    return person
  }

  async update(slug: string, dto: UpdatePersonDto): Promise<Person> {
    const person = await this.findOneBySlug(slug)

    const updatedPerson = await this.prismaService.person.update({
      where: { slug: person.slug },
      data: {
        ...dto,
      },
    })

    return updatedPerson
  }

  async delete(slug: string): Promise<Person> {
    const person = await this.findOneBySlug(slug)

    const deletedPerson = await this.prismaService.person.delete({
      where: { slug: person.slug },
    })

    return deletedPerson
  }
}
