import { CreditRole } from "../../../../../generated/prisma/enums";
export declare class MovieCreditsResponseDto {
    id: number;
    movieId: number;
    personId: number;
    role: CreditRole;
}
