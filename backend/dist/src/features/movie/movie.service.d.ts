import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreateMovieDto, UpdateMovieDto } from './dto';
import { Movie, MovieStatus } from "../../../generated/prisma/client";
import { PaginationDto, SearchDto, SortDto } from "../../common/dto";
import type { UploadedFile } from "../../common/types";
import { StorageService } from "../../infra/storage/storage.service";
export declare class MovieService {
    private readonly prismaService;
    private readonly storageService;
    constructor(prismaService: PrismaService, storageService: StorageService);
    findOneBySlug(slug: string, isForAdmin?: boolean): Promise<{
        genres: {
            id: number;
            slug: string;
            description: string | null;
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
        credits: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            role: import("generated/prisma/client").CreditRole;
            personId: number;
            movieId: number;
        }[];
        poster: {
            storageKey: string;
            url: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            movieId: number;
        } | null;
    } & {
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
    }>;
    findAll(dto: PaginationDto & SearchDto & SortDto, isForAdmin?: boolean): Promise<{
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
        total: number;
    }>;
    create(dto: CreateMovieDto, poster?: UploadedFile): Promise<Movie>;
    update(slug: string, dto: UpdateMovieDto, poster?: UploadedFile): Promise<Movie>;
    delete(slug: string): Promise<Movie>;
}
