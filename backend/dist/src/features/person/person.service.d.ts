import { Person } from "../../../generated/prisma/client";
import { PaginationDto, SearchDto, SortDto } from "../../common/dto";
import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreatePersonDto, UpdatePersonDto } from './dto';
export declare class PersonService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOneBySlug(slug: string): Promise<Person>;
    findAll(dto: PaginationDto & SearchDto & SortDto): Promise<{
        rows: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            bio: string | null;
            birthDate: Date | null;
        }[];
        total: number;
    }>;
    create(dto: CreatePersonDto): Promise<Person>;
    update(slug: string, dto: UpdatePersonDto): Promise<Person>;
    delete(slug: string): Promise<Person>;
}
