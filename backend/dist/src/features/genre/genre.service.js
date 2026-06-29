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
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../common/enums");
const prisma_service_1 = require("../../infra/prisma/prisma.service");
const utils_1 = require("../../common/utils");
let GenreService = class GenreService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findOneBySlug(slug) {
        const genre = await this.prismaService.genre.findUnique({
            where: { slug },
        });
        if (!genre) {
            throw new common_1.NotFoundException(`Genre with slug "${slug}" not found`);
        }
        return genre;
    }
    async findAll(dto) {
        const { page = 1, limit = 20, sort = enums_1.Sort.DESC } = dto;
        const skip = (page - 1) * limit;
        const [genres, total] = await this.prismaService.$transaction([
            this.prismaService.genre.findMany({
                skip,
                take: limit,
                orderBy: {
                    createdAt: sort,
                },
            }),
            this.prismaService.genre.count(),
        ]);
        return {
            rows: genres,
            total,
        };
    }
    async create(dto) {
        const slug = await (0, utils_1.generateUniqueSlug)(dto.name, async (slug) => await this.prismaService.genre.findUnique({
            where: { slug },
            select: { id: true },
        }));
        const genre = await this.prismaService.genre.create({
            data: {
                ...dto,
                slug,
            },
        });
        return genre;
    }
    async update(slug, dto) {
        const genre = await this.findOneBySlug(slug);
        const updatedGenre = await this.prismaService.genre.update({
            where: { slug: genre.slug },
            data: {
                ...dto,
            },
        });
        return updatedGenre;
    }
    async delete(slug) {
        const genre = await this.findOneBySlug(slug);
        const deletedGenre = await this.prismaService.genre.delete({
            where: { slug: genre.slug },
        });
        return deletedGenre;
    }
};
exports.GenreService = GenreService;
exports.GenreService = GenreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GenreService);
//# sourceMappingURL=genre.service.js.map