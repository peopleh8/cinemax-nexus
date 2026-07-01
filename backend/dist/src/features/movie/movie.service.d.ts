import { PrismaService } from "../../infra/prisma/prisma.service";
import { CreateMovieDto, UpdateMovieDto } from './dto';
import { Movie, MovieStatus } from "../../../generated/prisma/client";
import { QueryDto } from "../../common/dto";
import type { UploadedFile } from "../../common/types";
import { StorageService } from "../../infra/storage/storage.service";
import { PersonService } from '../person/person.service';
export declare class MovieService {
    private readonly prismaService;
    private readonly storageService;
    private readonly personService;
    constructor(prismaService: PrismaService, storageService: StorageService, personService: PersonService);
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
            id: number;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            code: string;
        }[];
        credits: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            movieId: number;
            personId: number;
            role: import("generated/prisma/client").CreditRole;
        }[];
        poster: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            movieId: number;
            url: string;
            storageKey: string;
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
    findAll(query: QueryDto, isForAdmin?: boolean): Promise<{
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
    findAllByPerson(slug: string, query: QueryDto, isForAdmin?: boolean): Promise<{
        rows: ({
            credits: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                movieId: number;
                personId: number;
                role: import("generated/prisma/client").CreditRole;
            }[];
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
        })[];
        total: number;
    }>;
    create(dto: CreateMovieDto, poster?: UploadedFile): Promise<Movie>;
    update(slug: string, dto: UpdateMovieDto, poster?: UploadedFile): Promise<Movie>;
    delete(slug: string): Promise<Movie>;
}
