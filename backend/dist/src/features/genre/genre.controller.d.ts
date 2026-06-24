import { GenreService } from './genre.service';
import { PaginationDto } from "../../common/dto";
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findOneBySlug(slug: string): Promise<{
        name: string;
        id: number;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(query: PaginationDto): Promise<{
        rows: {
            name: string;
            id: number;
            slug: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
    }>;
    create(dto: CreateGenreDto): Promise<{
        name: string;
        id: number;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(slug: string, dto: UpdateGenreDto): Promise<{
        name: string;
        id: number;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(slug: string): Promise<{
        name: string;
        id: number;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
