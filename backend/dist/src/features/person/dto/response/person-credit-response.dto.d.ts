import { CreditRole } from "../../../../../generated/prisma/enums";
export declare class ResponsePersonCreditDto {
    id: number;
    movieId: number;
    personId: number;
    role: CreditRole;
    createdAt: Date;
    updatedAt: Date;
}
