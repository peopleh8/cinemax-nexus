import { Person } from "../../../generated/prisma/client";
import { PaginationDto } from "../../common/dto";
import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOneBySlug(slug: string): Promise<Person>;
    findAll(dto: PaginationDto): Promise<{
        rows: {
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            bio: string | null;
            birthDate: Date | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    create(dto: CreatePersonDto): Promise<Person>;
    update(slug: string, dto: UpdatePersonDto): Promise<Person>;
    delete(slug: string): Promise<Person>;
}
