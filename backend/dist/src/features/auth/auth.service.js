"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infra/prisma/prisma.service");
const argon2 = __importStar(require("argon2"));
const node_crypto_1 = require("node:crypto");
const constants_1 = require("../../common/constants");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    prismaService;
    configService;
    constructor(prismaService, configService) {
        this.prismaService = prismaService;
        this.configService = configService;
    }
    async register(dto, request, response) {
        const sessionToken = request.cookies?.[constants_1.SESSION_COOKIE_NAME];
        if (sessionToken) {
            throw new common_1.ConflictException('User is already logged in');
        }
        const { email, password } = dto;
        const existingUser = await this.prismaService.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingUser) {
            throw new common_1.ConflictException('User with this email already exists');
        }
        const hashedPassword = await argon2.hash(password, {
            type: argon2.argon2id,
        });
        const user = await this.prismaService.user.create({
            data: {
                email,
                password: hashedPassword,
            },
            omit: {
                password: true,
            },
        });
        const session = await this.createSession(user.id);
        this.setSessionCookie(response, session.token);
        return {
            user,
        };
    }
    async login(dto, request, response) {
        const sessionToken = request.cookies?.[constants_1.SESSION_COOKIE_NAME];
        if (sessionToken) {
            throw new common_1.ConflictException('User is already logged in');
        }
        const { email, password } = dto;
        const user = await this.prismaService.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const isPasswordValid = await argon2.verify(user.password, password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const session = await this.createSession(user.id);
        this.setSessionCookie(response, session.token);
        return {
            ...user,
            password: undefined,
        };
    }
    async logout(request, response) {
        const sessionToken = request.cookies?.[constants_1.SESSION_COOKIE_NAME];
        if (!sessionToken) {
            throw new common_1.UnauthorizedException('No session token provided');
        }
        await this.prismaService.session.deleteMany({
            where: {
                tokenHash: this.hashSessionToken(sessionToken),
            },
        });
        this.clearSessionCookie(response);
        return {
            success: true,
        };
    }
    async validateSession(sessionToken) {
        const session = await this.prismaService.session.findFirst({
            where: {
                tokenHash: this.hashSessionToken(sessionToken),
                expiresAt: {
                    gt: new Date(),
                },
            },
            include: {
                user: {
                    omit: {
                        password: true,
                    },
                },
            },
        });
        if (!session) {
            throw new common_1.UnauthorizedException('Invalid or expired session token');
        }
        return session.user;
    }
    setSessionCookie(response, sessionToken) {
        const isDevelopment = this.configService.getOrThrow('NODE_ENV') === 'development';
        response.cookie(constants_1.SESSION_COOKIE_NAME, sessionToken, {
            httpOnly: true,
            secure: !isDevelopment,
            sameSite: 'lax',
            path: '/',
            maxAge: constants_1.SESSION_TTL_MS,
        });
    }
    clearSessionCookie(response) {
        const isDevelopment = this.configService.getOrThrow('NODE_ENV') === 'development';
        response.clearCookie(constants_1.SESSION_COOKIE_NAME, {
            httpOnly: true,
            secure: !isDevelopment,
            sameSite: 'lax',
            path: '/',
        });
    }
    async createSession(userId) {
        const token = (0, node_crypto_1.randomBytes)(32).toString('base64url');
        await this.prismaService.session.create({
            data: {
                userId,
                tokenHash: this.hashSessionToken(token),
                expiresAt: new Date(Date.now() + constants_1.SESSION_TTL_MS),
            },
        });
        return {
            token,
        };
    }
    hashSessionToken(token) {
        return (0, node_crypto_1.createHash)('sha256').update(token).digest('hex');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map