import { MovieStatus } from "../../../../generated/prisma/enums";
import { CreateMovieCreditInputDto } from './create-movie-credits-input.dto';
export declare class CreateMovieDto {
    title: string;
    originalTitle: string;
    description: string;
    releaseDate: Date;
    releaseYear: number;
    ageRating: string;
    status: MovieStatus;
    isFeatured: boolean;
    genreIds: number[];
    countryIds: number[];
    credits: CreateMovieCreditInputDto[];
}
