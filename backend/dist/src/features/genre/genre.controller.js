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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreController = void 0;
const common_1 = require("@nestjs/common");
const genre_service_1 = require("./genre.service");
const dto_1 = require("./dto");
const dto_2 = require("./dto");
const interceptors_1 = require("../../common/interceptors");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
const enums_1 = require("../../../generated/prisma/enums");
let GenreController = class GenreController {
    genreService;
    constructor(genreService) {
        this.genreService = genreService;
    }
    findOneBySlug(slug) {
        return this.genreService.findOneBySlug(slug);
    }
    findAll(query) {
        return this.genreService.findAll(query);
    }
    create(dto) {
        return this.genreService.create(dto);
    }
    update(slug, dto) {
        return this.genreService.update(slug, dto);
    }
    delete(slug) {
        return this.genreService.delete(slug);
    }
};
exports.GenreController = GenreController;
__decorate([
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(interceptors_1.PaginationInterceptor),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateGenreDto]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':slug'),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_2.UpdateGenreDto]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':slug'),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "delete", null);
exports.GenreController = GenreController = __decorate([
    (0, common_1.Controller)('genres'),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenreController);
//# sourceMappingURL=genre.controller.js.map