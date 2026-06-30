import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import type { Request, Response } from 'express';
import type { AuthorizedUser } from "../../common/types";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto, request: Request, response: Response): Promise<{
        user: {
            email: string;
            role: import("../../../generated/prisma/enums").UserRole[];
            createdAt: Date;
            updatedAt: Date;
            id: number;
        };
    }>;
    login(dto: LoginDto, request: Request, response: Response): Promise<{
        password: undefined;
        email: string;
        role: import("../../../generated/prisma/enums").UserRole[];
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    logout(request: Request, response: Response): Promise<{
        success: boolean;
    }>;
    me(user: AuthorizedUser): AuthorizedUser;
}
