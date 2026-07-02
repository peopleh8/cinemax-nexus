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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const dto_1 = require("./dto");
const platform_express_1 = require("@nestjs/platform-express");
const constants_1 = require("../../common/constants");
const interceptors_1 = require("../../common/interceptors");
const guards_1 = require("../../common/guards");
const decorators_1 = require("../../common/decorators");
const enums_1 = require("../../../generated/prisma/enums");
const swagger_1 = require("@nestjs/swagger");
const api_multipart_json_file_decorator_1 = require("../../common/decorators/api-multipart-json-file.decorator");
const response_1 = require("./dto/response");
let MovieController = class MovieController {
    movieService;
    constructor(movieService) {
        this.movieService = movieService;
    }
    findOneBySlug(slug) {
        return this.movieService.findOneBySlug(slug);
    }
    findAll(query) {
        return this.movieService.findAll(query);
    }
    create(dto, poster) {
        return this.movieService.create(dto, poster);
    }
    update(slug, dto, poster) {
        return this.movieService.update(slug, dto, poster);
    }
    delete(slug) {
        return this.movieService.delete(slug);
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a movie by slug' }),
    (0, swagger_1.ApiOkResponse)({ type: response_1.MovieResponseDto }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(interceptors_1.PaginationInterceptor),
    (0, swagger_1.ApiOperation)({ summary: 'Get all movies' }),
    (0, decorators_1.ApiPaginatedResponse)(response_1.MovieResponseDto, 'The movies have been successfully retrieved.'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.MovieQueryDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('poster', {
        limits: {
            fileSize: constants_1.MAX_IMAGE_SIZE,
        },
    }), new interceptors_1.ParseMultipartJsonInterceptor('data')),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new movie' }),
    (0, api_multipart_json_file_decorator_1.ApiJsonFileUpload)(dto_1.CreateMovieDto, {
        fileField: 'poster',
        fileDescription: 'Movie poster: JPG, PNG or WEBP.',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: response_1.MovieResponseDto, description: 'The movie has been successfully created.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)('data')),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        fileIsRequired: false,
        validators: [
            new common_1.FileTypeValidator({
                fileType: /^(image\/jpeg|image\/png|image\/webp)$/,
            }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateMovieDto, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':slug'),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('poster', {
        limits: {
            fileSize: constants_1.MAX_IMAGE_SIZE,
        },
    }), new interceptors_1.ParseMultipartJsonInterceptor('data')),
    (0, swagger_1.ApiOperation)({ summary: 'Update a movie by slug' }),
    (0, api_multipart_json_file_decorator_1.ApiJsonFileUpload)(dto_1.UpdateMovieDto, {
        fileField: 'poster',
        fileDescription: 'Movie poster: JPG, PNG or WEBP.',
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: response_1.MovieResponseDto, description: 'The movie has been successfully updated.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)('data')),
    __param(2, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        fileIsRequired: false,
        validators: [
            new common_1.FileTypeValidator({
                fileType: /^(image\/jpeg|image\/png|image\/webp)$/,
            }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateMovieDto, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':slug'),
    (0, common_1.UseGuards)(guards_1.SessionGuard, guards_1.RoleGuard),
    (0, decorators_1.Roles)(enums_1.UserRole.ADMIN, enums_1.UserRole.EDITOR),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a movie by slug' }),
    (0, swagger_1.ApiOkResponse)({ type: response_1.MovieResponseDto, description: 'The movie has been successfully deleted.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "delete", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)('movies'),
    (0, swagger_1.ApiTags)('Movies'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map