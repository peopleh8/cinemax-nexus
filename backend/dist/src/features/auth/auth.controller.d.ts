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
            email: string;
            role: import("../../../generated/prisma/enums").UserRole[];
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    login(dto: LoginDto, request: Request, response: Response): Promise<{
        password: undefined;
        id: number;
        email: string;
        role: import("../../../generated/prisma/enums").UserRole[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    logout(request: Request, response: Response): Promise<{
        success: boolean;
    }>;
    me(user: AuthorizedUser): AuthorizedUser;
}
