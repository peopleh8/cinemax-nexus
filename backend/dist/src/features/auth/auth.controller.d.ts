import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import type { Request, Response } from 'express';
import type { AuthorizedUser } from "../../common/types";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto, request: Request, response: Response): Promise<{
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            role: import("../../../generated/prisma/enums").UserRole[];
            email: string;
        };
    }>;
    login(dto: LoginDto, request: Request, response: Response): Promise<{
        password: undefined;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import("../../../generated/prisma/enums").UserRole[];
        email: string;
    }>;
    logout(request: Request, response: Response): Promise<{
        success: boolean;
    }>;
    me(user: AuthorizedUser): AuthorizedUser;
}
