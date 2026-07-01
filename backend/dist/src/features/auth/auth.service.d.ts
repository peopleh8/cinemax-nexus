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
    validateSession(sessionToken: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        role: import("../../../generated/prisma/enums").UserRole[];
        email: string;
    }>;
    private setSessionCookie;
    private clearSessionCookie;
    private createSession;
    private hashSessionToken;
}
