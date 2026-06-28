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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../common/enums");
const utils_1 = require("../../common/utils");
const prisma_service_1 = require("../../infra/prisma/prisma.service");
let CountryService = class CountryService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findOneBySlug(slug) {
        const country = await this.prismaService.country.findUnique({
            where: { slug },
        });
        if (!country) {
            throw new common_1.NotFoundException(`Country with slug "${slug}" not found`);
        }
        return country;
    }
    async findAll(dto) {
        const { page = 1, limit = 20, sort = enums_1.Sort.DESC } = dto;
        const skip = (page - 1) * limit;
        const [countries, total] = await this.prismaService.$transaction([
            this.prismaService.country.findMany({
                skip,
                take: limit,
                orderBy: {
                    createdAt: sort,
                },
            }),
            this.prismaService.country.count(),
        ]);
        return {
            rows: countries,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async create(dto) {
        const code = (0, utils_1.getCountryCode)(dto.name);
        const slug = await (0, utils_1.generateUniqueSlug)(dto.name, async (slug) => await this.prismaService.country.findUnique({
            where: { slug },
            select: { id: true },
        }));
        if (!code) {
            throw new common_1.BadRequestException(`Country code for "${dto.name}" not found`);
        }
        const country = await this.prismaService.country.create({
            data: {
                ...dto,
                slug,
                code,
            },
        });
        return country;
    }
    async update(slug, dto) {
        const country = await this.findOneBySlug(slug);
        const updatedCountry = await this.prismaService.country.update({
            where: { slug: country.slug },
            data: {
                ...dto,
            },
        });
        return updatedCountry;
    }
    async delete(slug) {
        const country = await this.findOneBySlug(slug);
        const deletedCountry = await this.prismaService.country.delete({
            where: { slug: country.slug },
        });
        return deletedCountry;
    }
};
exports.CountryService = CountryService;
exports.CountryService = CountryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CountryService);
//# sourceMappingURL=country.service.js.map