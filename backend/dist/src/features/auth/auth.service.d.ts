import { PrismaService } from "../../infra/prisma/prisma.service";
import { LoginDto, RegisterDto } from './dto';
import { ConfigService } from '@nestjs/config';
import type { Request, Response } from 'express';
export declare class AuthService {
    private readonly prismaService;
    private readonly configService;
    constructor(prismaService: PrismaService, configService: ConfigService);
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
    validateSession(sessionToken: string): Promise<{
        id: number;
        email: string;
        role: import("../../../generated/prisma/enums").UserRole[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    private setSessionCookie;
    private clearSessionCookie;
    private createSession;
    private hashSessionToken;
}
