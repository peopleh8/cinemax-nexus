import { CreditRole } from "../../../../../generated/prisma/enums";
export declare class ResponsePersonCreditDto {
    id: number;
    movieId: number;
    personId: number;
    role: CreditRole;
    createdAt: Date;
    updatedAt: Date;
}
export declare class ResponsePersonDto {
    id: number;
    slug: string;
    name: string;
    bio: string | null;
    birthDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    credits: ResponsePersonCreditDto[];
}
