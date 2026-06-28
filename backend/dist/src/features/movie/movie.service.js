"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../../common/utils");
const prisma_service_1 = require("../../infra/prisma/prisma.service");
const client_1 = require("../../../generated/prisma/client");
const enums_1 = require("../../common/enums");
let MovieService = class MovieService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getUniqueSlug(title) {
        const baseSlug = (0, utils_1.createSlug)(title);
        let slug = baseSlug;
        let counter = 2;
        while (await this.prismaService.movie.findUnique({
            where: { slug },
            select: { id: true },
        })) {
            slug = `${baseSlug}-${counter}`;
            counter += 1;
        }
        return slug;
    }
    async findOneBySlug(slug, isForAdmin = false) {
        const movie = await this.prismaService.movie.findFirst({
            where: { slug, ...(isForAdmin ? {} : { status: client_1.MovieStatus.PUBLISHED }) },
            include: {
                genres: true,
                countries: true,
            },
        });
        if (!movie) {
            throw new common_1.NotFoundException(`Movie with slug "${slug}" not found`);
        }
        return movie;
    }
    async findAll(dto, isForAdmin = false) {
        const { page = 1, limit = 20, sort = enums_1.Sort.DESC } = dto;
        const skip = (page - 1) * limit;
        const [movies, total] = await this.prismaService.$transaction([
            this.prismaService.movie.findMany({
                skip,
                take: limit,
                where: {
                    ...(isForAdmin ? {} : { status: client_1.MovieStatus.PUBLISHED }),
                },
                orderBy: {
                    createdAt: sort,
                },
            }),
            this.prismaService.movie.count({
                where: {
                    ...(isForAdmin ? {} : { status: client_1.MovieStatus.PUBLISHED }),
                },
            }),
        ]);
        return {
            rows: movies,
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async create(dto) {
        const { genreIds, countryIds, ...movieData } = dto;
        const slug = await this.getUniqueSlug(dto.title);
        const uniqueGenres = [...new Set(genreIds)];
        const uniqueCountries = [...new Set(countryIds)];
        const genres = await this.prismaService.genre.findMany({
            where: { id: { in: uniqueGenres } },
            select: { id: true },
        });
        const countries = await this.prismaService.country.findMany({
            where: { id: { in: uniqueCountries } },
            select: { id: true },
        });
        if (genres.length !== uniqueGenres.length) {
            throw new common_1.NotFoundException('One or more genres not found');
        }
        if (countries.length !== uniqueCountries.length) {
            throw new common_1.NotFoundException('One or more countries not found');
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
        });
        return movie;
    }
    async update(slug, dto) {
        const { genreIds, countryIds, ...movieData } = dto;
        const movie = await this.findOneBySlug(slug, true);
        const uniqueGenres = [...new Set(genreIds)];
        const uniqueCountries = [...new Set(countryIds)];
        const genres = genreIds !== undefined
            ? await this.prismaService.genre.findMany({
                where: { id: { in: uniqueGenres } },
                select: { id: true },
            })
            : undefined;
        const countries = countryIds !== undefined
            ? await this.prismaService.country.findMany({
                where: { id: { in: uniqueCountries } },
                select: { id: true },
            })
            : undefined;
        if (genreIds !== undefined && genres && genres.length !== uniqueGenres.length) {
            throw new common_1.NotFoundException('One or more genres not found');
        }
        if (countryIds !== undefined && countries && countries.length !== uniqueCountries.length) {
            throw new common_1.NotFoundException('One or more countries not found');
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
        });
        return updatedMovie;
    }
    async delete(slug) {
        const movie = await this.findOneBySlug(slug, true);
        const deletedMovie = await this.prismaService.movie.delete({
            where: { slug: movie.slug },
        });
        return deletedMovie;
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MovieService);
//# sourceMappingURL=movie.service.js.map