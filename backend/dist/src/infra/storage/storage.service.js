"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const node_crypto_1 = require("node:crypto");
const promises_1 = require("node:fs/promises");
const node_path_1 = require("node:path");
const constants_1 = require("../../common/constants");
const utils_1 = require("../../common/utils");
let StorageService = class StorageService {
    configService;
    uploadsDirectory = (0, node_path_1.resolve)(process.cwd(), 'uploads');
    constructor(configService) {
        this.configService = configService;
    }
    async uploadImage(file, folder) {
        const extension = (0, utils_1.getFileExtension)(file.originalname);
        if (!extension) {
            throw new common_1.BadRequestException('Only JPG, PNG and WEBP images are supported');
        }
        if (file.size > constants_1.MAX_IMAGE_SIZE) {
            throw new common_1.PayloadTooLargeException('Image must not exceed 5 MB');
        }
        const filename = `${(0, node_crypto_1.randomUUID)()}.${extension}`;
        const storageKey = `${folder}/${filename}`;
        const filePath = this.resolveStoragePath(storageKey);
        try {
            await (0, promises_1.mkdir)((0, node_path_1.resolve)(filePath, '..'), { recursive: true });
            await (0, promises_1.writeFile)(filePath, file.buffer);
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to save image');
        }
        return {
            storageKey,
            url: this.getPublicUrl(storageKey),
        };
    }
    getPublicUrl(storageKey) {
        const appUrl = this.configService.getOrThrow('APP_URL').replace(/\/+$/, '');
        return `${appUrl}/uploads/${storageKey}`;
    }
    async deleteFile(storageKey) {
        const filePath = this.resolveStoragePath(storageKey);
        try {
            await (0, promises_1.unlink)(filePath);
        }
        catch (error) {
            const isNotFound = typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT';
            if (!isNotFound) {
                throw new common_1.InternalServerErrorException('Failed to delete stored file');
            }
        }
    }
    resolveStoragePath(storageKey) {
        const filePath = (0, node_path_1.resolve)(this.uploadsDirectory, storageKey);
        const pathFromUploads = (0, node_path_1.relative)(this.uploadsDirectory, filePath);
        if (!pathFromUploads || pathFromUploads.startsWith('..') || (0, node_path_1.isAbsolute)(pathFromUploads)) {
            throw new common_1.BadRequestException('Invalid storage key');
        }
        return filePath;
    }
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], StorageService);
//# sourceMappingURL=storage.service.js.map