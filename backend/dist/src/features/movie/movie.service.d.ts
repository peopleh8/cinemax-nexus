import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreateMovieDto } from './dto';
import { Movie, MovieStatus } from "../../../generated/prisma/client";
import { PaginationDto } from "../../common/dto";
import { UpdateMovieDto } from './dto';
import type { UploadedFile } from "../../common/types";
import { StorageService } from "../../infra/storage/storage.service";
export declare class MovieService {
    private readonly prismaService;
    private readonly storageService;
    constructor(prismaService: PrismaService, storageService: StorageService);
    findOneBySlug(slug: string, isForAdmin?: boolean): Promise<{
        credits: {
            personId: number;
            role: import("generated/prisma/client").CreditRole;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            movieId: number;
        }[];
        genres: {
            description: string | null;
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        }[];
        countries: {
            code: string;
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
        }[];
        poster: {
            url: string;
            storageKey: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            movieId: number;
        } | null;
    } & {
        title: string;
        originalTitle: string | null;
        description: string | null;
        releaseDate: Date | null;
        releaseYear: number | null;
        ageRating: string;
        status: MovieStatus;
        isFeatured: boolean;
        id: number;
        slug: string;
        excerpt: string | null;
        duration: number | null;
        ratingAverage: import("@prisma/client-runtime-utils").Decimal;
        ratingCount: number;
        reviewCount: number;
        viewCount: number;
        publishedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(dto: PaginationDto, isForAdmin?: boolean): Promise<{
        rows: {
            title: string;
            originalTitle: string | null;
            description: string | null;
            releaseDate: Date | null;
            releaseYear: number | null;
            ageRating: string;
            status: MovieStatus;
            isFeatured: boolean;
            id: number;
            slug: string;
            excerpt: string | null;
            duration: number | null;
            ratingAverage: import("@prisma/client-runtime-utils").Decimal;
            ratingCount: number;
            reviewCount: number;
            viewCount: number;
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
    create(dto: CreateMovieDto, poster?: UploadedFile): Promise<Movie>;
    update(slug: string, dto: UpdateMovieDto, poster?: UploadedFile): Promise<Movie>;
    delete(slug: string): Promise<Movie>;
}
