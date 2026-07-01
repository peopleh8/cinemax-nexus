import { MovieStatus } from "../../../../../generated/prisma/enums";
import { MovieCreditsResponseDto } from './movie-credits-response.dto';
import { GenreResponseDto } from "../../../genre/dto/response";
import { CountryResponseDto } from "../../../country/dto/response";
import { MoviePosterResponseDto } from './movie-poster-response.dto';
export declare class MovieResponseDto {
    id: number;
    slug: string;
    title: string;
    originalTitle: string;
    excerpt: string;
    description: string;
    releaseDate: Date;
    releaseYear: number;
    duration: number;
    ageRating: string;
    status: MovieStatus;
    ratingAverage: number;
    ratingCount: number;
    reviewCount: number;
    isFeatured: boolean;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    credits: MovieCreditsResponseDto[];
    genres: GenreResponseDto[];
    countries: CountryResponseDto[];
    poster: MoviePosterResponseDto;
}
