import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie, MovieStatus } from "../../../generated/prisma/client";
import { PaginationDto } from "../../common/dto";
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MovieService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    private getUniqueSlug;
    findOneBySlug(slug: string, isForAdmin?: boolean): Promise<Movie>;
    findAll(dto: PaginationDto, isForAdmin?: boolean): Promise<{
        rows: {
            id: number;
            slug: string;
            title: string;
            originalTitle: string | null;
            excerpt: string | null;
            description: string | null;
            releaseDate: Date | null;
            releaseYear: number | null;
            duration: number | null;
            ageRating: string;
            status: MovieStatus;
            ratingAverage: import("@prisma/client-runtime-utils").Decimal;
            ratingCount: number;
            reviewCount: number;
            viewCount: number;
            isFeatured: boolean;
            publishedAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    create(dto: CreateMovieDto): Promise<Movie>;
    update(slug: string, dto: UpdateMovieDto): Promise<Movie>;
    delete(slug: string): Promise<Movie>;
}
