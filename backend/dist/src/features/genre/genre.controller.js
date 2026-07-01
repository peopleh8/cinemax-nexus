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
const dto_1 = require("../../common/dto");
const dto_2 = require("./dto");
const dto_3 = require("./dto");
const interceptors_1 = require("../../common/interceptors");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
const enums_1 = require("../../../generated/prisma/enums");
const swagger_1 = require("@nestjs/swagger");
const response_1 = require("./dto/response");
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
    (0, swagger_1.ApiOperation)({ summary: 'Get a genre by slug' }),
    (0, swagger_1.ApiOkResponse)({ type: response_1.GenreResponseDto, description: 'The genre has been successfully retrieved.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(interceptors_1.PaginationInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all genres' }),
    (0, decorators_1.ApiPaginatedResponse)(response_1.GenreResponseDto, 'The genres have been successfully retrieved.'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryDto]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new genre' }),
    (0, swagger_1.ApiCreatedResponse)({ type: response_1.GenreResponseDto, description: 'The genre has been successfully created.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.CreateGenreDto]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':slug'),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, swagger_1.ApiOperation)({ summary: 'Update a genre by slug' }),
    (0, swagger_1.ApiOkResponse)({ type: response_1.GenreResponseDto, description: 'The genre has been successfully updated.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_3.UpdateGenreDto]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':slug'),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a genre by slug' }),
    (0, swagger_1.ApiOkResponse)({ type: response_1.GenreResponseDto, description: 'The genre has been successfully deleted.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GenreController.prototype, "delete", null);
exports.GenreController = GenreController = __decorate([
    (0, common_1.Controller)('genres'),
    (0, swagger_1.ApiTags)('Genres'),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenreController);
//# sourceMappingURL=genre.controller.js.map