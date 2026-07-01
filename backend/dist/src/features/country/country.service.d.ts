import { Country } from "../../../generated/prisma/client";
import { PaginationDto, SearchDto, SortDto } from "../../common/dto";
import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreateCountryDto, UpdateCountryDto } from './dto';
export declare class CountryService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOneBySlug(slug: string): Promise<Country>;
    findAll(dto: PaginationDto & SearchDto & SortDto): Promise<{
        rows: {
            name: string;
            id: number;
            slug: string;
            code: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
    create(dto: CreateCountryDto): Promise<Country>;
    update(slug: string, dto: UpdateCountryDto): Promise<Country>;
    delete(slug: string): Promise<Country>;
}
