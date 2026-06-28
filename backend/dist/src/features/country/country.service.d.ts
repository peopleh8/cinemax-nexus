import { Country } from "../../../generated/prisma/client";
import { PaginationDto } from "../../common/dto";
import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreateCountryDto } from './dto';
import { UpdateCountryDto } from './dto';
export declare class CountryService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOneBySlug(slug: string): Promise<Country>;
    findAll(dto: PaginationDto): Promise<{
        rows: {
            code: string;
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    create(dto: CreateCountryDto): Promise<Country>;
    update(slug: string, dto: UpdateCountryDto): Promise<Country>;
    delete(slug: string): Promise<Country>;
}
