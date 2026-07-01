import { Genre } from "../../../generated/prisma/client";
import { PaginationDto, SearchDto, SortDto } from "../../common/dto";
import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreateGenreDto, UpdateGenreDto } from './dto';
export declare class GenreService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOneBySlug(slug: string): Promise<Genre>;
    findAll(dto: PaginationDto & SearchDto & SortDto): Promise<{
        rows: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            slug: string;
        }[];
        total: number;
    }>;
    create(dto: CreateGenreDto): Promise<Genre>;
    update(slug: string, dto: UpdateGenreDto): Promise<Genre>;
    delete(slug: string): Promise<Genre>;
}
