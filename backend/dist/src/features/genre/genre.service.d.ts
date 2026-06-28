import { Genre } from "../../../generated/prisma/client";
import { PaginationDto } from "../../common/dto";
import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOneBySlug(slug: string): Promise<Genre>;
    findAll(dto: PaginationDto): Promise<{
        rows: {
            description: string | null;
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
    }>;
    create(dto: CreateGenreDto): Promise<Genre>;
    update(slug: string, dto: UpdateGenreDto): Promise<Genre>;
    delete(slug: string): Promise<Genre>;
}
