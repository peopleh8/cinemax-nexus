import { GenreService } from './genre.service';
import { QueryDto } from "../../common/dto";
import { CreateGenreDto } from './dto';
import { UpdateGenreDto } from './dto';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findOneBySlug(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
    }>;
    findAll(query: QueryDto): Promise<{
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
    create(dto: CreateGenreDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
    }>;
    update(slug: string, dto: UpdateGenreDto): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
    }>;
    delete(slug: string): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        slug: string;
    }>;
}
