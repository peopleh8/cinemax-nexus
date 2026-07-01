import { GenreService } from './genre.service';
import { PaginationDto, SearchDto, SortDto } from "../../common/dto";
import { CreateGenreDto } from './dto';
import { UpdateGenreDto } from './dto';
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
    findAll(query: PaginationDto & SearchDto & SortDto): Promise<{
        rows: {
            name: string;
            id: number;
            slug: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
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
