import { UserRole } from "../../../../../generated/prisma/enums";
export declare class UserResponseDto {
    id: number;
    email: string;
    role: UserRole[];
    createdAt: Date;
    updatedAt: Date;
}
