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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("../../common/enums");
const prisma_service_1 = require("../../infra/prisma/prisma.service");
const utils_1 = require("../../common/utils");
let PersonService = class PersonService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findOneBySlug(slug) {
        const person = await this.prismaService.person.findUnique({
            where: { slug },
        });
        if (!person) {
            throw new common_1.NotFoundException(`Person with slug "${slug}" not found`);
        }
        return person;
    }
    async findAll(dto) {
        const { page = 1, limit = 20, sort = enums_1.Sort.DESC } = dto;
        const skip = (page - 1) * limit;
        const [people, total] = await this.prismaService.$transaction([
            this.prismaService.person.findMany({
                skip,
                take: limit,
                orderBy: {
                    createdAt: sort,
                },
            }),
            this.prismaService.person.count(),
        ]);
        return {
            rows: people,
            total,
        };
    }
    async create(dto) {
        const slug = await (0, utils_1.generateUniqueSlug)(dto.name, async (slug) => await this.prismaService.person.findUnique({
            where: { slug },
            select: { id: true },
        }));
        const person = await this.prismaService.person.create({
            data: {
                ...dto,
                slug,
            },
        });
        return person;
    }
    async update(slug, dto) {
        const person = await this.findOneBySlug(slug);
        const updatedPerson = await this.prismaService.person.update({
            where: { slug: person.slug },
            data: {
                ...dto,
            },
        });
        return updatedPerson;
    }
    async delete(slug) {
        const person = await this.findOneBySlug(slug);
        const deletedPerson = await this.prismaService.person.delete({
            where: { slug: person.slug },
        });
        return deletedPerson;
    }
};
exports.PersonService = PersonService;
exports.PersonService = PersonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PersonService);
//# sourceMappingURL=person.service.js.map