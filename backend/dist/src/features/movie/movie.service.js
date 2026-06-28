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
const prisma_service_1 = require("../../infra/prisma/prisma.service");
const client_1 = require("../../../generated/prisma/client");
const enums_1 = require("../../common/enums");
const utils_1 = require("../../common/utils");
const storage_service_1 = require("../../infra/storage/storage.service");
const constants_1 = require("../../common/constants");
let MovieService = class MovieService {
    prismaService;
    storageService;
    constructor(prismaService, storageService) {
        this.prismaService = prismaService;
        this.storageService = storageService;
    }
    async findOneBySlug(slug, isForAdmin = false) {
        const movie = await this.prismaService.movie.findFirst({
            where: { slug, ...(isForAdmin ? {} : { status: client_1.MovieStatus.PUBLISHED }) },
            include: {
                genres: true,
                countries: true,
                credits: true,
                poster: true,
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
    async create(dto, poster) {
        const { genreIds, countryIds, credits, ...movieData } = dto;
        let uploadedPoster = null;
        const slug = await (0, utils_1.generateUniqueSlug)(dto.title, async (slug) => await this.prismaService.movie.findUnique({
            where: { slug },
            select: { id: true },
        }));
        const uniqueGenres = [...new Set(genreIds)];
        const uniqueCountries = [...new Set(countryIds)];
        const uniquePeople = [...new Set(credits?.map((credit) => credit.personId))];
        const genres = await this.prismaService.genre.findMany({
            where: { id: { in: uniqueGenres } },
            select: { id: true },
        });
        const countries = await this.prismaService.country.findMany({
            where: { id: { in: uniqueCountries } },
            select: { id: true },
        });
        const people = await this.prismaService.person.findMany({
            where: { id: { in: uniquePeople } },
            select: { id: true },
        });
        if (genres.length !== uniqueGenres.length) {
            throw new common_1.NotFoundException('One or more genres not found');
        }
        if (countries.length !== uniqueCountries.length) {
            throw new common_1.NotFoundException('One or more countries not found');
        }
        if (uniquePeople.length !== people.length) {
            throw new common_1.NotFoundException('One or more people not found');
        }
        if (poster) {
            uploadedPoster = await this.storageService.uploadImage(poster, constants_1.StorageFolder.MOVIE_POSTERS);
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
        });
        return movie;
    }
    async update(slug, dto, poster) {
        const { genreIds, countryIds, credits, ...movieData } = dto;
        const movie = await this.findOneBySlug(slug, true);
        const uniqueGenreIds = genreIds !== undefined ? [...new Set(genreIds)] : undefined;
        const uniqueCountryIds = countryIds !== undefined ? [...new Set(countryIds)] : undefined;
        const uniquePersonIds = credits !== undefined ? [...new Set(credits.map((credit) => credit.personId))] : undefined;
        let uploadedPoster = null;
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
        ]);
        if (uniqueGenreIds !== undefined && genres.length !== uniqueGenreIds.length) {
            throw new common_1.NotFoundException('One or more genres not found');
        }
        if (uniqueCountryIds !== undefined && countries.length !== uniqueCountryIds.length) {
            throw new common_1.NotFoundException('One or more countries not found');
        }
        if (uniquePersonIds !== undefined && people.length !== uniquePersonIds.length) {
            throw new common_1.NotFoundException('One or more people not found');
        }
        if (poster) {
            uploadedPoster = await this.storageService.uploadImage(poster, constants_1.StorageFolder.MOVIE_POSTERS);
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
                            set: genres,
                        },
                    }
                    : {}),
                ...(countryIds !== undefined
                    ? {
                        countries: {
                            set: countries,
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
        });
        if (uploadedPoster && movie?.poster?.storageKey) {
            await this.storageService.deleteFile(movie.poster.storageKey);
        }
        return updatedMovie;
    }
    async delete(slug) {
        const movie = await this.findOneBySlug(slug, true);
        const deletedMovie = await this.prismaService.movie.delete({
            where: { slug: movie.slug },
        });
        if (movie?.poster?.storageKey) {
            await this.storageService.deleteFile(movie.poster.storageKey);
        }
        return deletedMovie;
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService])
], MovieService);
//# sourceMappingURL=movie.service.js.map