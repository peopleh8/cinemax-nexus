import { GenreService } from './genre.service';
import { PaginationDto } from "../../common/dto";
import { CreateGenreDto } from './dto';
import { UpdateGenreDto } from './dto';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findOneBySlug(slug: string): Promise<{
        description: string | null;
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    findAll(query: PaginationDto): Promise<{
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
    create(dto: CreateGenreDto): Promise<{
        description: string | null;
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    update(slug: string, dto: UpdateGenreDto): Promise<{
        description: string | null;
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    delete(slug: string): Promise<{
        description: string | null;
        id: number;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
}
