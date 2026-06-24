import { MovieStatus } from "../../../../generated/prisma/enums";
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
}
