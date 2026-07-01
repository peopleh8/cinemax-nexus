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
exports.MoviePosterResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MoviePosterResponseDto {
    id;
    movieId;
    url;
    storageKey;
    createdAt;
    updatedAt;
}
exports.MoviePosterResponseDto = MoviePosterResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the movie poster',
        example: 1,
    }),
    __metadata("design:type", Number)
], MoviePosterResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The ID of the movie associated with the poster',
        example: 1,
    }),
    __metadata("design:type", Number)
], MoviePosterResponseDto.prototype, "movieId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The URL of the movie poster',
        example: 'https://example.com/poster.jpg',
    }),
    __metadata("design:type", String)
], MoviePosterResponseDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The storage key of the movie poster',
        example: 'posters/1.jpg',
    }),
    __metadata("design:type", String)
], MoviePosterResponseDto.prototype, "storageKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date and time when the movie poster was created',
        example: '2023-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], MoviePosterResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The date and time when the movie poster was last updated',
        example: '2023-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], MoviePosterResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=movie-poster-response.dto.js.map