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
    validateSession(sessionToken: string): Promise<{
        email: string;
        role: import("../../../generated/prisma/enums").UserRole[];
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    private setSessionCookie;
    private clearSessionCookie;
    private createSession;
    private hashSessionToken;
}
