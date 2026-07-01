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
exports.MovieResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const enums_1 = require("../../../../../generated/prisma/enums");
const movie_credits_response_dto_1 = require("./movie-credits-response.dto");
const response_1 = require("../../../genre/dto/response");
const response_2 = require("../../../country/dto/response");
const movie_poster_response_dto_1 = require("./movie-poster-response.dto");
class MovieResponseDto {
    id;
    slug;
    title;
    originalTitle;
    excerpt;
    description;
    releaseDate;
    releaseYear;
    duration;
    ageRating;
    status;
    ratingAverage;
    ratingCount;
    reviewCount;
    isFeatured;
    publishedAt;
    createdAt;
    updatedAt;
    credits;
    genres;
    countries;
    poster;
}
exports.MovieResponseDto = MovieResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique identifier of the movie',
        example: 1,
    }),
    __metadata("design:type", Number)
], MovieResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The slug of the movie',
        example: 'inception',
    }),
    __metadata("design:type", String)
], MovieResponseDto.prototype, "slug", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The title of the movie',
        example: 'Inception',
    }),
    __metadata("design:type", String)
], MovieResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The original title of the movie',
        example: 'Inception',
    }),
    __metadata("design:type", String)
], MovieResponseDto.prototype, "originalTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A short excerpt of the movie',
        example: 'A mind-bending thriller...',
    }),
    __metadata("design:type", String)
], MovieResponseDto.prototype, "excerpt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The full description of the movie',
        example: 'Inception is a 2010 science fiction action film...',
    }),
    __metadata("design:type", String)
], MovieResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The release date of the movie',
        example: '2010-07-16',
    }),
    __metadata("design:type", Date)
], MovieResponseDto.prototype, "releaseDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The release year of the movie',
        example: 2010,
    }),
    __metadata("design:type", Number)
], MovieResponseDto.prototype, "releaseYear", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The duration of the movie in minutes',
        example: 148,
    }),
    __metadata("design:type", Number)
], MovieResponseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The age rating of the movie',
        example: 'PG-13',
    }),
    __metadata("design:type", String)
], MovieResponseDto.prototype, "ageRating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The status of the movie',
        example: enums_1.MovieStatus.PUBLISHED,
    }),
    __metadata("design:type", String)
], MovieResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The average rating of the movie',
        example: 8.8,
    }),
    __metadata("design:type", Number)
], MovieResponseDto.prototype, "ratingAverage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of ratings for the movie',
        example: 1200,
    }),
    __metadata("design:type", Number)
], MovieResponseDto.prototype, "ratingCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The number of reviews for the movie',
        example: 300,
    }),
    __metadata("design:type", Number)
], MovieResponseDto.prototype, "reviewCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the movie is featured',
        example: true,
    }),
    __metadata("design:type", Boolean)
], MovieResponseDto.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The publication date of the movie',
        example: '2010-07-16T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], MovieResponseDto.prototype, "publishedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The creation date of the movie record',
        example: '2010-07-16T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], MovieResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The last update date of the movie record',
        example: '2010-07-16T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], MovieResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The credits associated with the movie',
        type: [movie_credits_response_dto_1.MovieCreditsResponseDto],
    }),
    __metadata("design:type", Array)
], MovieResponseDto.prototype, "credits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The genres associated with the movie',
        type: [response_1.GenreResponseDto],
    }),
    __metadata("design:type", Array)
], MovieResponseDto.prototype, "genres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The countries associated with the movie',
        type: [response_2.CountryResponseDto],
    }),
    __metadata("design:type", Array)
], MovieResponseDto.prototype, "countries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The poster associated with the movie',
        type: movie_poster_response_dto_1.MoviePosterResponseDto,
    }),
    __metadata("design:type", movie_poster_response_dto_1.MoviePosterResponseDto)
], MovieResponseDto.prototype, "poster", void 0);
//# sourceMappingURL=movie-response.dto.js.map