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
        credits: {
            id: number;
            role: import("generated/prisma/client").CreditRole;
            createdAt: Date;
            updatedAt: Date;
            personId: number;
            movieId: number;
        }[];
        genres: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            slug: string;
        }[];
        countries: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            code: string;
            slug: string;
        }[];
        poster: {
            url: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            storageKey: string;
            movieId: number;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        originalTitle: string | null;
        description: string | null;
        releaseDate: Date | null;
        releaseYear: number | null;
        ageRating: string;
        status: MovieStatus;
        isFeatured: boolean;
        slug: string;
        excerpt: string | null;
        duration: number | null;
        ratingAverage: import("@prisma/client-runtime-utils").Decimal;
        ratingCount: number;
        reviewCount: number;
        viewCount: number;
        publishedAt: Date | null;
    }>;
    findAll(dto: PaginationDto & SearchDto & SortDto, isForAdmin?: boolean): Promise<{
        rows: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            originalTitle: string | null;
            description: string | null;
            releaseDate: Date | null;
            releaseYear: number | null;
            ageRating: string;
            status: MovieStatus;
            isFeatured: boolean;
            slug: string;
            excerpt: string | null;
            duration: number | null;
            ratingAverage: import("@prisma/client-runtime-utils").Decimal;
            ratingCount: number;
            reviewCount: number;
            viewCount: number;
            publishedAt: Date | null;
        }[];
        total: number;
    }>;
    create(dto: CreateMovieDto, poster?: UploadedFile): Promise<Movie>;
    update(slug: string, dto: UpdateMovieDto, poster?: UploadedFile): Promise<Movie>;
    delete(slug: string): Promise<Movie>;
}
