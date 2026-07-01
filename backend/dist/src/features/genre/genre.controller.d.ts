import { GenreService } from './genre.service';
import { QueryDto } from "../../common/dto";
import { CreateGenreDto } from './dto';
import { UpdateGenreDto } from './dto';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findOneBySlug(slug: string): Promise<{
        id: number;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    findAll(query: QueryDto): Promise<{
        rows: {
            id: number;
            slug: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        }[];
        total: number;
    }>;
    create(dto: CreateGenreDto): Promise<{
        id: number;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    update(slug: string, dto: UpdateGenreDto): Promise<{
        id: number;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    delete(slug: string): Promise<{
        id: number;
        slug: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
}
