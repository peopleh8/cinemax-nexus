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
const dto_2 = require("../../common/dto");
const dto_3 = require("./dto");
const platform_express_1 = require("@nestjs/platform-express");
const constants_1 = require("../../common/constants");
const interceptors_1 = require("../../common/interceptors");
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
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.PaginationDto]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('poster', {
        limits: {
            fileSize: constants_1.MAX_IMAGE_SIZE,
        },
        fileFilter: (_request, file, callback) => {
            if (!(0, constants_1.isSupportedImageMimeType)(file.mimetype)) {
                callback(new common_1.BadRequestException('Only JPG, PNG and WEBP poster images are supported'), false);
                return;
            }
            callback(null, true);
        },
    }), new interceptors_1.ParseMultipartJsonInterceptor('data')),
    __param(0, (0, common_1.Body)('data')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateMovieDto, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':slug'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('poster', {
        limits: {
            fileSize: constants_1.MAX_IMAGE_SIZE,
        },
        fileFilter: (_request, file, callback) => {
            if (!(0, constants_1.isSupportedImageMimeType)(file.mimetype)) {
                callback(new common_1.BadRequestException('Only JPG, PNG and WEBP poster images are supported'), false);
                return;
            }
            callback(null, true);
        },
    }), new interceptors_1.ParseMultipartJsonInterceptor('data')),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)('data')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_3.UpdateMovieDto, Object]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MovieController.prototype, "delete", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map